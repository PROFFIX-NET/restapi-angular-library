import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxMitarbeiter } from "../mitarbeiter/px-mitarbeiter.model";
import { PxDatenbank } from "../datenbank/px-datenbank.model";

/**
 * Model für /PRO/Login
 */
export interface PxLogin extends PxRestApiModelInterface {
  Benutzer: string;
  Passwort: string;
  Mitarbeiter?: PxMitarbeiter;
  Datenbank: PxDatenbank;
  Module?: string[];
}
