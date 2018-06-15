import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { PxError } from "./px-error.model";

/**
 * Verwaltet den InvalidFields-Stream
 */
@Injectable()
export class PxErrorService {
  private errorSubject: Subject<PxError> = new Subject<PxError>();

  /**
   * Observable vom Error-Stream welcher bei jedem REST API-Fehler ein Event erhält
   */
  public get errorObservable(): Observable<PxError> {
    return this.errorSubject.asObservable();
  }

  /**
   * Feuert einen neuen Event in den Error-Stream
   * @param error Fehler der geworfen wird
   */
  public fireError(error: PxError) {
    this.errorSubject.next(error);
  }
}
