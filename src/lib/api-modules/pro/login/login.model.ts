import { RestApiModelInterface, Mitarbeiter, Datenbank } from '../../';

/**
 * Model für /PRO/Login
 */
export interface Login extends RestApiModelInterface {
  Benutzer: string;
  Passwort: string;
  Mitarbeiter?: Mitarbeiter;
  Datenbank: Datenbank;
  Module?: string[];
}
