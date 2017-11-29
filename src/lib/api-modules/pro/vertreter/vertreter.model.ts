import { RestApiModelInterface, Mitarbeiter } from '../../';

/**
 * Model für /PRO/Vertreter
 */
export interface Vertreter extends RestApiModelInterface {
  VertreterNr?: string;
  Name?: string;
  Mitarbeiter?: Mitarbeiter;
  Geloescht?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
