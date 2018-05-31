
import { throwError, Observable } from 'rxjs';
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

import { PxError } from "./px-error.model";
import { PxUrlFormatter } from "../utils/px-url-formatter";
import { PxConnectionSettingsService } from "../connection-settings/px-connection-settings.service";
import { PxErrorService } from "./px-error.service";
import { catchError } from 'rxjs/operators';


/**
 * Interceptor welcher den fehlgeschlagenen HTTP-Response in unser Error-Objekt umwandelt.
 * Muss dem Injector hinzugefügt werden über den OpaqueToken RESPONSE_INTERCEPTORS
 */
@Injectable()
export class PxErrorInterceptor implements HttpInterceptor {

  /**
   * Object Konstruktor
   * @param connectionSettingsService Verbindungseinstellungsservice
   */
  constructor(private connectionSettingsService: PxConnectionSettingsService, private errorService: PxErrorService) { }

  /**
   * Request und Response verarbeiten
   * @param req Request
   * @param next Http Handler
   */
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          const pxError: PxError = error.error as PxError; // TODO Was passiert wenn kein Error-Model zurückkommt
          pxError.Endpoint = PxUrlFormatter.getEndpoint(error.url, this.connectionSettingsService.current.WebserviceUrl);
          pxError.Status = error.status;
          this.errorService.fireError(pxError);
          console.log("Error Interceptor: " + error.message);
          return throwError(pxError);
        } else {
          return throwError(error);
        }
      }));
  }
}
