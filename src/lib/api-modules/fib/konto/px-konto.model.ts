import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKontoklasse } from "../kontoklasse/px-kontoklasse.model";


/**
 * Model für /FIB/Konto
 */
export interface PxKonto extends PxRestApiModelInterface {
  KontoNr?: string;
  Bezeichnung?: string;
  Steuercode?: PxSteuercode;
  Kontoklasse?: PxKontoklasse;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
