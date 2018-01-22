import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import { PxError } from "./px-error.model";

/**
 * Verwaltet den InvalidFields-Stream
 */
@Injectable()
export class PxInvalidFieldsService {
  private invalidFieldsErrorSubject: Subject<PxError> = new Subject<PxError>();

  /**
   * Observable vom InvalidFields-Stream welcher bei jedem Feld-Fehler ein Event erhält
   */
  public get invalidFieldsObservable(): Observable<PxError> {
    return this.invalidFieldsErrorSubject.asObservable();
  }

  /**
   * Feuert einen neuen Event in den InvalidFields-Stream
   * @param error Fehler der geworfen wird
   */
  public fireInvalidFieldsError(error: PxError) {
    this.invalidFieldsErrorSubject.next(error);
  }
}
