import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Lagerort
 */
export interface Lagerort extends RestApiModelInterface {
  LagerortNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
