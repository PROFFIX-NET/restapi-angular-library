import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxLand } from "../land/px-land.model";

/**
 * Model für /PRO/Bank
 */
export interface PxBank extends PxRestApiModelInterface {
  BankNr?: number;
  Name?: string;
  Strasse?: string;
  PLZ?: string;
  Ort?: string;
  Land?: PxLand;
  Telefon?: string;
  Fax?: string;
  ClearingNummer?: number;
  PostcheckNr?: string;
  SwiftNummer?: string;
  ServerTyp?: number;
  Geloescht?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
