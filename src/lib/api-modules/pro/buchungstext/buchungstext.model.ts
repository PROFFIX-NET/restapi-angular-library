import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Buchungstext
 */
export interface Buchungstext extends RestApiModelInterface {
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
