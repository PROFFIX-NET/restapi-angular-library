import { PxDatenbank } from "../datenbank/px-datenbank.model";

/**
 * Model für /PRO/Login
 */
export interface PxLogin {
  Benutzer: string;
  Passwort: string;
  Mitarbeiter?: any;
  Datenbank: PxDatenbank;
  Module?: string[];
}
