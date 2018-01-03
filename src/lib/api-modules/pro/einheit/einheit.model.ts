import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Einheit
 */
export interface Einheit extends RestApiModelInterface {
  EinheitNr?: string;
  Bezeichnung?: string;
  Abkuerzung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
