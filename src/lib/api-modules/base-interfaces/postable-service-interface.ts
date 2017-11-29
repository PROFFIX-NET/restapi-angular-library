import { Observable } from "rxjs/Observable";
import { RestApiServiceInterface } from "./";

/**
 * Interface für alle POST Services welche Daten anlegen
 */
export interface PostableServiceInterface<T> extends RestApiServiceInterface {
  post(model: T): Observable<string>;
}
