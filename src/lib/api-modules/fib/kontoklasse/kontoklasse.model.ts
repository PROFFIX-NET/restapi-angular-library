import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kontoklasse
 */
export interface Kontoklasse extends RestApiModelInterface {
  KontoklasseNr?: string;
  Bezeichnung?: string;
  Kontotyp?: number;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
