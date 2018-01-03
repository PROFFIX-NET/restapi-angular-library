import { RestApiModelInterface } from '../../';

/**
 * Model /ADR/Kontakttyp
 */
export interface Kontakttyp extends RestApiModelInterface {
  KontakttypNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
