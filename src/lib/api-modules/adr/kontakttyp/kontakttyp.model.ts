import { RestApiModelInterface } from '../../';

/**
 * Model /ADR/Kontakttyp
 */
export interface Kontakttyp extends RestApiModelInterface {
  KontakttypNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
