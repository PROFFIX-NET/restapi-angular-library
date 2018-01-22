import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /LAG/Charge
 */
export interface PxCharge extends PxRestApiModelInterface {
  ChargeNr?: string;
  Bezeichnung?: string;
  Inaktiv?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
