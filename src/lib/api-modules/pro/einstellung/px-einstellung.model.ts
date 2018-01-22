import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Einstellung
 */
export interface PxEinstellung extends PxRestApiModelInterface {
  Modul?: string;
  Section?: string;
  Einstellung?: string;
}
