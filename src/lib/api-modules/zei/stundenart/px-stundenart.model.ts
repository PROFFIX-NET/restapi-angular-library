import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /ZEI/Stundenart
 */
export interface PxStundenart extends PxRestApiModelInterface {
  StundenartNr?: string;
  Bezeichnung?: string;
  ZeitErfassen?: boolean;
  Vorgabezeit?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
