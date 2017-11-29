/**
 * Interface für alle PUT Services welche Daten ändern
 */
import { Observable } from "rxjs/Observable";
import { RestApiServiceInterface } from "./";

export interface PuttableServiceInterface<T> extends RestApiServiceInterface {
  put(model: T): Observable<void>;
}
