import { InjectionToken } from "@angular/core";
import { RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { PxHttpService } from "./px-http.service";

/**
 * Interface für RequestInterceptors. Muss dem Dependency Injector mit dem OpaqueToken "REQUEST_INTERCEPTORS" hinzugefügt werden
 */
export interface PxRequestInterceptor {

  /**
   * Request verarbeiten
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  processRequest(httpService: PxHttpService, observable: Observable<RequestOptionsArgs>): Observable<RequestOptionsArgs>;
}

/**
 * OpaqueToken zum Hinzufügen eines RequestInterceptors zum Dependency Injector
 */
export const PX_REQUEST_INTERCEPTORS = new InjectionToken<PxRequestInterceptor>("REQUEST_INTERCEPTORS");
