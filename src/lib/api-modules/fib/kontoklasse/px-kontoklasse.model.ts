import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /FIB/Kontoklasse
 */
export interface PxKontoklasse extends PxRestApiModelInterface {
  KontoklasseNr?: string;
  Bezeichnung?: string;
  Kontotyp?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
