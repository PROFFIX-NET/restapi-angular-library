/**
 * Interface für alle PUT Services welche Daten ändern
 */
import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";

export interface PxPuttableServiceInterface<T> extends PxRestApiServiceInterface {
  put(model: T): Observable<void>;
}
