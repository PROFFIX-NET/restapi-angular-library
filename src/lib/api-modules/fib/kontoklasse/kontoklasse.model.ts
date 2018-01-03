import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kontoklasse
 */
export interface Kontoklasse extends RestApiModelInterface {
  KontoklasseNr?: string;
  Bezeichnung?: string;
  Kontotyp?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
