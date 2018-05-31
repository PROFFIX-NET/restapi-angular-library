import { Observable } from "rxjs";
import { PxRestApiServiceInterface } from "./px-rest-api-service-interface";

/**
 * Interface für alle DELETE Services welche Daten löschen
 */
export interface PxDeletableServiceInterface<T> extends PxRestApiServiceInterface {
  delete(id: number | string): Observable<void>;
}
