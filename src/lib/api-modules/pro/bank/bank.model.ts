import { RestApiModelInterface, Land } from '../../';

/**
 * Model für /PRO/Bank
 */
export interface Bank extends RestApiModelInterface {
  BankNr?: number;
  Name?: string;
  Strasse?: string;
  PLZ?: string;
  Ort?: string;
  Land?: Land;
  Telefon?: string;
  Fax?: string;
  ClearingNummer?: number;
  PostcheckNr?: string;
  SwiftNummer?: string;
  ServerTyp?: number;
  Geloescht?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
