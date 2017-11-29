import { Observable } from "rxjs/Observable";
import { RestApiServiceInterface } from "./";

/**
 * Interface für alle DELETE Services welche Daten löschen
 */
export interface DeletableServiceInterface<T> extends RestApiServiceInterface {
  delete(id: number | string): Observable<void>;
}
