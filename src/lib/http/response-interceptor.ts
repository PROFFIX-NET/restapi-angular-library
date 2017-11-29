import { InjectionToken } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./";

/**
 * Interface für ResponseInterceptors. Muss dem Dependency Injector mit dem OpaqueToken "RESPONSE_INTERCEPTORS" hinzugefügt werden
 */
export interface ResponseInterceptor {

  /**
   * Response verarbeiten
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  processResponse(httpService: HttpService, observable: Observable<Response>): Observable<Response>;
}

/**
 * OpaqueToken zum Hinzufügen eines ResponseInterceptors zum Dependency Injector
 */
export let RESPONSE_INTERCEPTORS = new InjectionToken<ResponseInterceptor>("RESPONSE_INTERCEPTORS");
