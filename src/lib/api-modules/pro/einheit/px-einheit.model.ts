import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Einheit
 */
export interface PxEinheit extends PxRestApiModelInterface {
  EinheitNr?: string;
  Bezeichnung?: string;
  Abkuerzung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
