/**
 * Model für Feld-Fehler innerhalb des Error-Models der REST API
 */
export interface InvalidField {
  Reason: string;
  Name: string;
  Message: string;
}
