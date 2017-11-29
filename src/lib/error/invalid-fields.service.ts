import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs/Subject';
import { Error } from "./";

/**
 * Verwaltet den InvalidFields-Stream
 */
@Injectable()
export class InvalidFieldsService {
  private invalidFieldsErrorSubject: Subject<Error> = new Subject<Error>();

  /**
   * Observable vom InvalidFields-Stream welcher bei jedem Feld-Fehler ein Event erhält
   */
  public get invalidFieldsObservable(): Observable<Error> {
    return this.invalidFieldsErrorSubject.asObservable();
  }

  /**
   * Feuert einen neuen Event in den InvalidFields-Stream
   * @param {Error} error Fehler der geworfen wird
   */
  public fireInvalidFieldsError(error: Error) {
    this.invalidFieldsErrorSubject.next(error);
  }
}
