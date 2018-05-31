import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';

import { PxError } from "./px-error.model";

/**
 * Verwaltet den InvalidFields-Stream
 */
@Injectable()
export class PxErrorService {
  private errorSubject: Subject<PxError> = new Subject<PxError>();

  /**
   * Observable vom InvalidFields-Stream welcher bei jedem Feld-Fehler ein Event erhält
   */
  public get errorObservable(): Observable<PxError> {
    return this.errorSubject.asObservable();
  }

  /**
   * Feuert einen neuen Event in den InvalidFields-Stream
   * @param error Fehler der geworfen wird
   */
  public fireError(error: PxError) {
    this.errorSubject.next(error);
  }
}
