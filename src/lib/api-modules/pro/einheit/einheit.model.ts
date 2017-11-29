import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Einheit
 */
export interface Einheit extends RestApiModelInterface {
  EinheitNr?: string;
  Bezeichnung?: string;
  Abkuerzung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
