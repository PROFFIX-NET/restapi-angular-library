import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Lagerort
 */
export interface Lagerort extends RestApiModelInterface {
  LagerortNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
