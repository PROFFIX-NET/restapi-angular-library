import { InjectionToken } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { PxHttpService } from "./px-http.service";

/**
 * Interface für ResponseInterceptors. Muss dem Dependency Injector mit dem OpaqueToken "RESPONSE_INTERCEPTORS" hinzugefügt werden
 */
export interface PxResponseInterceptor {

  /**
   * Response verarbeiten
   * @param httpService Referenz zum aktuellen HTTP-Service damit keine zweite Instanz erstellt wird
   * @param observable Response-Observable zum verarbeiten und weitergeben
   */
  processResponse(httpService: PxHttpService, observable: Observable<Response>): Observable<Response>;
}

/**
 * OpaqueToken zum Hinzufügen eines ResponseInterceptors zum Dependency Injector
 */
export const PX_RESPONSE_INTERCEPTORS = new InjectionToken<PxResponseInterceptor>("RESPONSE_INTERCEPTORS");
