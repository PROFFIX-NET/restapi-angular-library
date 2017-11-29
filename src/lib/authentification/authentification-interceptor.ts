import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/retryWhen";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';
import { AuthentificationInternalService } from "./authentification-internal.service";
import { HttpService, ResponseInterceptor } from "../http";

/**
 * HTTP-ResponseInterceptor welcher fehlerhafte Logins abfängt einen einen erneuten Login versucht.
 * Muss dem Injector hinzugefügt werden über den OpaqueToken RESPONSE_INTERCEPTORS
 */
@Injectable()
export class AuthentificationInterceptor implements ResponseInterceptor {

  public constructor(
    private loginService: AuthentificationInternalService
  ) { }

  /**
   * Login-Fehler abfangen und erneutes Login versuchen, sonst fehlschlagen lassen
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  public processResponse(httpService: HttpService, observable: Observable<Response>): Observable<Response> {

    // Fehlerhafte HTTP-Requests werden gefangen und erneut Versucht, wenn es sich um einen HTTP 401 handelt
    return observable.retryWhen(
      (errors: Observable<Response>) => errors.flatMap(
        (res: Response) => {

          if (res.status === 401) {

            // Bei 401 wird ein Re- oder Auto-Login versucht
            return this.loginService.doLogin(httpService).catch(() => {
              this.loginService.fireLoginFailed();
              return Observable.throw(res); // Wenn der automatische Login fehlschlägt, Observable weiterwerfen
            });
          } else {

            // andere Fehler werden weitergeworfen
            return Observable.throw(res);
          }
        }
      )
    );
  }
}
