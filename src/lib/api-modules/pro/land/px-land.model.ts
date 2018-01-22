import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxWaehrung } from "../waehrung/px-waehrung.model";

/**
 * Model für /PRO/Land
 */
export interface PxLand extends PxRestApiModelInterface {
  LandNr?: string;
  Bezeichnung?: string;
  Vorwahl?: string;
  Waehrung?: PxWaehrung;
  SADCode?: number;
  CodePost?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
