import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Belegart
 */
export interface Belegart extends RestApiModelInterface {
  BelegartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
