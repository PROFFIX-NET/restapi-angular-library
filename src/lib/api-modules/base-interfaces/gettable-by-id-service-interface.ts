import { Observable } from "rxjs/Observable";
import { RestApiServiceInterface } from "./";
import { GlobalQueryParameter } from "../../http";

/**
 * Interface für alle GET Services welche einen einzelnen Wert per ID abrufen
 */
export interface GettableByIdServiceInterface<T> extends RestApiServiceInterface {
  get(id: number | string, params?: GlobalQueryParameter): Observable<T>;
}
