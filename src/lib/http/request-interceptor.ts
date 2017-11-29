import { InjectionToken } from "@angular/core";
import { RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "./";

/**
 * Interface für RequestInterceptors. Muss dem Dependency Injector mit dem OpaqueToken "REQUEST_INTERCEPTORS" hinzugefügt werden
 */
export interface RequestInterceptor {

  /**
   * Request verarbeiten
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  processRequest(httpService: HttpService, observable: Observable<RequestOptionsArgs>): Observable<RequestOptionsArgs>;
}

/**
 * OpaqueToken zum Hinzufügen eines RequestInterceptors zum Dependency Injector
 */
export let REQUEST_INTERCEPTORS = new InjectionToken<RequestInterceptor>("REQUEST_INTERCEPTORS");
