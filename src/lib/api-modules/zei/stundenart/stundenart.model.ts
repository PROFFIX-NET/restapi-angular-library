import { RestApiModelInterface } from '../../';

/**
 * Model für /ZEI/Stundenart
 */
export interface Stundenart extends RestApiModelInterface {
  StundenartNr?: string;
  Bezeichnung?: string;
  ZeitErfassen?: boolean;
  Vorgabezeit?: number;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
