import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";

/**
 * Interface für alle POST Services welche Daten anlegen
 */
export interface PxPostableServiceInterface<T> extends PxRestApiServiceInterface {
  post(model: T): Observable<string>;
}
