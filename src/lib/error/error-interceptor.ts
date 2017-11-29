import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';
import { HttpService, ResponseInterceptor } from "../http";
import { Error } from "./";

/**
 * Interceptor welcher den fehlgeschlagenen HTTP-Response in unser Error-Objekt umwandelt.
 * Muss dem Injector hinzugefügt werden über den OpaqueToken RESPONSE_INTERCEPTORS
 */
@Injectable()
export class ErrorInterceptor implements ResponseInterceptor {

  /**
   * Wirft einen Error in den HTTP-Stream
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  public processResponse(httpService: HttpService, observable: Observable<Response>): Observable<Response> {

    // Wandle Response in Error um
    return observable.catch((res: Response) => {
      const error: Error = res.json() as Error; // TODO Was passiert wenn kein Error-Model zurückkommt
      error.Endpoint = httpService.getEndpoint(res.url);
      error.Status = res.status;
      console.log("Error Interceptor: " + res.text());
      return Observable.throw(error);
    });
  }
}
