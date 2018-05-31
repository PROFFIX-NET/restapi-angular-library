import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";
import { PxGlobalQueryParameter } from "../../http/px-global-query-parameter";

/**
 * Interface für alle GET Services welche Daten abrufen
 */
export interface PxGettableAllServiceInterface<T> extends PxRestApiServiceInterface {
  getAll(params?: PxGlobalQueryParameter): Observable<T[]>;
}
