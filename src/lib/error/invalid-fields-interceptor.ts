import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService, ResponseInterceptor } from "../http";
import { Error } from "./error.model";
import { InvalidFieldsService } from "./invalid-fields.service";
import 'rxjs/add/observable/throw';

/**
 * HTTP-Response-Interceptor für Feld-Fehler, da das Error-Objekt verfügbar sein muss,
 * darf er erst nach dem Error-Interceptor registriert werden!
 * Er muss dem Injector hinzugefügt werden über den OpaqueToken RESPONSE_INTERCEPTORS
 */
@Injectable()
export class InvalidFieldsInterceptor implements ResponseInterceptor {

  public constructor(
    private invalidFieldsService: InvalidFieldsService
  ) { }

  /**
   * Fängt alle Errors ab und prüft ob es sich um einen Feld-Fehler handelt, wenn ja,
   * wird er in den InvalidFieldsError-Stream weitergeleitet
   * @param {HttpService} httpService HTTP-Service zum verarbeiten (kann nicht injected werden), wird hier nicht benötigt
   * @param {Observable<Response>} observable HTTP-Response-Stream
   */
  public processResponse(httpService: HttpService, observable: Observable<Response>): Observable<Response> {
    return observable.catch((error: Error) => {
      if (error && error.Fields && error.Type === "INVALID_FIELDS") {
        this.invalidFieldsService.fireInvalidFieldsError(error);
      }

      return Observable.throw(error);
    });
  }
}
