import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Waehrung
 */
export interface PxWaehrung extends PxRestApiModelInterface {
  WaehrungNr?: string;
  Bezeichnung?: string;
  Kurs?: number;
  Verhaeltnis?: number;
  Rundung?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
