import { RestApiModelInterface } from '../../';

/**
 * Model für /ADR/Adressgruppe
 */
export interface Adressgruppe extends RestApiModelInterface {
  AdressgruppeNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
