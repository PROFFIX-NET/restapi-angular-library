
import { throwError, Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpProgressEvent,
  HttpResponse,
  HttpUserEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { PxLoginService } from "../login/px-login.service";
import { map, catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { PxConnectionSettingsService } from '../connection-settings/px-connection-settings.service';
import { PxUrlFormatter } from '../utils/px-url-formatter';

/**
 * HTTP-Interceptor für das Session und Reauthorizaion Handling.
 */

@Injectable()
export class PxHttpInterceptor implements HttpInterceptor {

  private static SESSION_ID_HEADER = "PxSessionId";
  private sessionId: string;
  private reAuthentication = false;
  private waitingForLoginSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Object Konstruktor
   * @param loginService Login Service wird für die ReAuthentication benötigt.
   */
  public constructor(private loginService: PxLoginService, private connectionSettingsService: PxConnectionSettingsService) { }

  /**
   * Request und Response verarbeiten
   * @param req Request
   * @param next Http Handler
   */
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(this.addSessionId(req)).pipe(
      map(response => {
        if (response instanceof HttpResponse) {
          this.retrieveSessionId(response);
        }
        return response;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (this.reAuthentication && req.url === this.loginUrl) {
            // ReAuthentication ist fehlgeschlagen. Error wird weitergeleitet.
            return throwError(error);
          } else if (error.status === 401) {
            // Bei 401 Error wird eine ReAuthentication durchgeführt.
            return this.handle401Error(req, next);
          } else {
            // Alle anderen Errors werden weitergeleitet.
            return throwError(error);
          }
        } else {
          return throwError(error);
        }
      }));
  }

  /**
   * Setzt die Session-ID im Request-Header
   * @param req Request
   */
  private addSessionId(req: HttpRequest<any>): HttpRequest<any> {
    const headers = this.sessionId ? req.headers.set(PxHttpInterceptor.SESSION_ID_HEADER, this.sessionId) : req.headers;
    return req.clone({ headers });
  }

  /**
   * Hilfsfunktion um die Session-ID aus dem Response-Header auszulesen
   * @param res Response
   */
  private retrieveSessionId(res: HttpResponse<any> | HttpErrorResponse) {
    if (res.headers && res.headers.has(PxHttpInterceptor.SESSION_ID_HEADER)) {
      this.sessionId = res.headers.get(PxHttpInterceptor.SESSION_ID_HEADER);
    }
  }

  /**
   * HTTP 401 Error Handling. Hier wir die ReAuthentication durcheführt.
   */
  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.reAuthentication) { // wenn Login bereits läuft, dann nicht nochmals Login versuchen
      this.reAuthentication = true;

      // Hier wird die SessionId geresettet und alle anderen Requests warten bis der Login
      // abgeschlossen ist dann werden diese ausgeführt.
      this.waitingForLoginSubject.next(false);

      return this.loginService.doLogin().pipe(
        switchMap(() => {
          this.waitingForLoginSubject.next(true);
          return next.handle(this.addSessionId(req)); // ursprünglicher Request wird erneut gefeuert
        }),
        catchError(error => {
          return throwError(error); // Wenn der automatische Login fehlschlägt, Observable weiterwerfen
        }),
        finalize(() => {
          this.reAuthentication = false;
        }));
    } else {
      // Sobald sessionIdSubject feuert, wird der ursprüngliche Request (next) gefeuert
      // durch switchMap wird next erst gefeuert wenn sessionIdSubject feuert (und nicht null ist, siehe filter)
      return this.waitingForLoginSubject.pipe(
        filter(isLoggedIn => isLoggedIn === true),
        take(1),
        switchMap(() => {
          return next.handle(this.addSessionId(req));
        }));
    }
  }

  private get loginUrl(): string {
    return PxUrlFormatter.getAbsolutUrl(this.loginService.endpoint, this.connectionSettingsService.load().WebserviceUrl);
  }
}

