import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Datenbank
 */
export interface PxDatenbank extends PxRestApiModelInterface {
  Name?: string;
  Bezeichnung?: string;
}
