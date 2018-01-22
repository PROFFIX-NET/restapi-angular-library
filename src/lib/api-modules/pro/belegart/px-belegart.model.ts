import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Belegart
 */
export interface PxBelegart extends PxRestApiModelInterface {
  BelegartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
