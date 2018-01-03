import { RestApiModelInterface, Steuercode, Kontoklasse } from '../../';

/**
 * Model für /FIB/Konto
 */
export interface Konto extends RestApiModelInterface {
  KontoNr?: string;
  Bezeichnung?: string;
  Steuercode?: Steuercode;
  Kontoklasse?: Kontoklasse;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
