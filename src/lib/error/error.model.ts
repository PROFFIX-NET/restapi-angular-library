import { InvalidField } from "./";

/**
 * Model für Fehler aus der REST API
 */
export interface Error {
  Endpoint: string;
  Status: number;
  Type: string;
  Message: string;
  Fields?: InvalidField[];
}
