import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxKonto } from "../../fib/konto/px-konto.model";

/**
 * Model für /PRO/Steuercode
 */
export interface PxSteuercode extends PxRestApiModelInterface {
  SteuercodeNr?: number;
  Bezeichnung?: string;
  Prozent?: number;
  InklusivMWST?: boolean;
  Konto?: PxKonto;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
