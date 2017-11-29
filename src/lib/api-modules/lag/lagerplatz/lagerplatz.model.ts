import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Lagerplatz
 */
export interface Lagerplatz extends RestApiModelInterface {
  LagerplatzNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
