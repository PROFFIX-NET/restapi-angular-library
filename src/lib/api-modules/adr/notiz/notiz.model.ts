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
  Datum?: string;
  Termin?: string;
  Notiz?: string;
  NotizRTF?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
