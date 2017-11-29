import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Buchungstext
 */
export interface Buchungstext extends RestApiModelInterface {
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
