import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";
import { PxGlobalQueryParameter } from "../../http/px-global-query-parameter";

/**
 * Interface für alle Flat GET Services welche einen einzelnen Wert per ID abrufen
 */
export interface PxGettableByIdFlatServiceInterface<T> extends PxRestApiServiceInterface {
  getFlat(id: number | string, params?: PxGlobalQueryParameter): Observable<T>;
}
