import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";
import { PxGlobalQueryParameter } from "../../http/px-global-query-parameter";

/**
 * Interface für alle GET Services welche einen einzelnen Wert per ID abrufen
 */
export interface PxGettableByIdServiceInterface<T> extends PxRestApiServiceInterface {
  get(id: number | string, params?: PxGlobalQueryParameter): Observable<T>;
}
