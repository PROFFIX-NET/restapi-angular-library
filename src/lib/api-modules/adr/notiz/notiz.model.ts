import { RestApiModelInterface, Adresse, Kontakt, Mitarbeiter, Notizart } from '../../';

/**
 * Model für /ADR/Notiz
 */
export interface Notiz extends RestApiModelInterface {
  NotizNr?: number;
  Adresse?: Adresse;
  Kontakt?: Kontakt;
  Mitarbeiter?: Mitarbeiter;
  Notizart?: Notizart;
  Datum?: Date;
  Termin?: Date;
  Notiz?: string;
  NotizRTF?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
