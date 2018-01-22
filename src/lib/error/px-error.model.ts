import { PxInvalidField } from "./px-invalid-field.model";

/**
 * Model für Fehler aus der REST API
 */
export interface PxError {
  Endpoint: string;
  Status: number;
  Type: string;
  Message: string;
  Fields?: PxInvalidField[];
}
