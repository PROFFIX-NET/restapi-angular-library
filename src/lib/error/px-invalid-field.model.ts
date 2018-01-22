/**
 * Model für Feld-Fehler innerhalb des Error-Models der REST API
 */
export interface PxInvalidField {
  Reason: string;
  Name: string;
  Message: string;
}
