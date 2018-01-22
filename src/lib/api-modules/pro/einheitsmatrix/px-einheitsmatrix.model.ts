import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxEinheit } from "../einheit/px-einheit.model";

/**
 * Model für /PRO/Einheitsmatrix
 */
export interface PxEinheitsmatrix extends PxRestApiModelInterface {
  EinheitLager?: PxEinheit;
  EinheitRechnung?: PxEinheit;
  Bezeichnung?: string;
  EinheitDim1?: string;
  EinheitDim2?: string;
  EinheitDim3?: string;
  RechnenDim1?: boolean;
  RechnenDim2?: boolean;
  RechnenDim3?: boolean;
  Divisor?: number;
  Multiplikator?: number;
  Rundung?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
