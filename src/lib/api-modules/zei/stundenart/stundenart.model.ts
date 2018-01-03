import { RestApiModelInterface } from '../../';

/**
 * Model für /ZEI/Stundenart
 */
export interface Stundenart extends RestApiModelInterface {
  StundenartNr?: string;
  Bezeichnung?: string;
  ZeitErfassen?: boolean;
  Vorgabezeit?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
