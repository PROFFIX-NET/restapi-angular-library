import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Belegart
 */
export interface Belegart extends RestApiModelInterface {
  BelegartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
