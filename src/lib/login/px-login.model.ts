import { PxDatenbank } from "../datenbank/px-datenbank.model";

/**
 * Model für /PRO/Login
 */
export class PxLogin {
  Benutzer: string;
  Passwort: string;
  Mitarbeiter?: any;
  Datenbank: PxDatenbank;
  Module?: string[];
}
