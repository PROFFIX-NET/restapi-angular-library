
import {throwError as observableThrowError,  Observable ,  BehaviorSubject } from 'rxjs';
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
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";









import { debug } from "util";
import { PxLoginService } from "../api-modules/pro/login/px-login.service";
import { map, catchError, switchMap, finalize, filter, take } from 'rxjs/operators';

/**
 * HTTP-Interceptor für das Session und Reauthorizaion Handling.
 */

@Injectable()
export class PxHttpInterceptor implements HttpInterceptor {

  private static SESSION_ID_HEADER = "PxSessionId";
  private sessionId: string;
  private reAuthentication = false;
  private sessionIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  /**
   * Object Konstruktor
   * @param loginService Login Service wird für die ReAuthentication benötigt.
   */
  public constructor(private loginService: PxLoginService) { }

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
          switch (error.status) {
            case 401:
              return this.handle401Error(req, next);
          }
        } else {
          return observableThrowError(error);
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
  handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.reAuthentication) {
      this.reAuthentication = true;

      // Hier wird die SessionId geresettet und alle anderen Requests warten bis der Login
      // abgeschlossen ist dann werden diese ausgeführt.
      this.sessionIdSubject.next(null);

      this.loginService.doLogin().pipe(
        switchMap(() => {
          this.sessionIdSubject.next(this.sessionId);
          return next.handle(this.addSessionId(req));
        }),
        catchError(error => {
          return observableThrowError(error); // Wenn der automatische Login fehlschlägt, Observable weiterwerfen
        }),
        finalize(() => {
          this.reAuthentication = false;
        }));
    } else {
      return this.sessionIdSubject.pipe(
        filter(sessionId => sessionId != null),
        take(1),
        switchMap(sessionId => {
          return next.handle(this.addSessionId(req));
        }));
    }
  }
}

