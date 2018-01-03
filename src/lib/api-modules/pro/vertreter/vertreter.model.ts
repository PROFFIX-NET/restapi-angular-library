import { RestApiModelInterface, Mitarbeiter } from '../../';

/**
 * Model für /PRO/Vertreter
 */
export interface Vertreter extends RestApiModelInterface {
  VertreterNr?: string;
  Name?: string;
  Mitarbeiter?: Mitarbeiter;
  Geloescht?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
