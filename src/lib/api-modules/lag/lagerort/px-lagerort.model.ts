import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /LAG/Lagerort
 */
export interface PxLagerort extends PxRestApiModelInterface {
  LagerortNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
