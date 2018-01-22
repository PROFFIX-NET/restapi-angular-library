import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /LAG/Lagerplatz
 */
export interface PxLagerplatz extends PxRestApiModelInterface {
  LagerplatzNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
