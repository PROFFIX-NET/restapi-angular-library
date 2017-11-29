import { RestApiModelInterface, Adresse, Positionsart, Stundenart } from '../../';

/**
 * Model für /PRO/Mitarbeiter
 */
export interface Mitarbeiter extends RestApiModelInterface {
  MitarbeiterNr?: number;
  Name?: string;
  Kurzzeichen?: string;
  Adresse?: Adresse;
  Positionsart?: Positionsart;
  Stundenart?: Stundenart;
  Feriensaldo?: number;
  BadgeID?: string;
  Geloescht?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
