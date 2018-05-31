import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";
import { PxGlobalQueryParameter } from "../../http/px-global-query-parameter";

/**
 * Interface für alle GET Services welche Daten abrufen
 */
export interface PxGettableAllFlatServiceInterface<T> extends PxRestApiServiceInterface {
  getAllFlat(params?: PxGlobalQueryParameter): Observable<T[]>;
}
