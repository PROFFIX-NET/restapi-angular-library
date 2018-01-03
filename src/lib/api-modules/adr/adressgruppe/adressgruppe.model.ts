import { RestApiModelInterface } from '../../';

/**
 * Model für /ADR/Adressgruppe
 */
export interface Adressgruppe extends RestApiModelInterface {
  AdressgruppeNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
