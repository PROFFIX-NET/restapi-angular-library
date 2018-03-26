import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

import { PxHttpService } from "../http/px-http.service";
import { PxResponseInterceptor } from "../http/px-response-interceptor";
import { PxError } from "./px-error.model";
import { PxInvalidFieldsService } from "./px-invalid-fields.service";

/**
 * HTTP-Response-Interceptor für Feld-Fehler, da das Error-Objekt verfügbar sein muss,
 * darf er erst nach dem Error-Interceptor registriert werden!
 * Er muss dem Injector hinzugefügt werden über den OpaqueToken RESPONSE_INTERCEPTORS
 */
@Injectable()
export class PxInvalidFieldsInterceptor implements PxResponseInterceptor {

  public constructor(
    private invalidFieldsService: PxInvalidFieldsService
  ) { }

  /**
   * Fängt alle Errors ab und prüft ob es sich um einen Feld-Fehler handelt, wenn ja,
   * wird er in den InvalidFieldsError-Stream weitergeleitet
   * @param httpService HTTP-Service zum verarbeiten (kann nicht injected werden), wird hier nicht benötigt
   * @param observable HTTP-Response-Stream
   */
  public processResponse(httpService: PxHttpService, observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: PxError) => {
      if (error && error.Fields && error.Type === "INVALID_FIELDS") {
        this.invalidFieldsService.fireInvalidFieldsError(error);
      }

      return Observable.throw(error);
    });
  }
}
