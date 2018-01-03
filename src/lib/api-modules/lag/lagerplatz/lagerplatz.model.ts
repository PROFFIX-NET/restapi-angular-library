import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Lagerplatz
 */
export interface Lagerplatz extends RestApiModelInterface {
  LagerplatzNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
