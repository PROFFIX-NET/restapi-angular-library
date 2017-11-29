import { Observable } from "rxjs/Observable";
import { RestApiServiceInterface } from "./";
import { GlobalQueryParameter } from "../../http";

/**
 * Interface für alle GET Services welche Daten abrufen
 */
export interface GettableAllServiceInterface<T> extends RestApiServiceInterface {
  getAll(params?: GlobalQueryParameter): Observable<T[]>;
}
