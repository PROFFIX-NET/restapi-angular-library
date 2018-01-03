import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Waehrung
 */
export interface Waehrung extends RestApiModelInterface {
  WaehrungNr?: string;
  Bezeichnung?: string;
  Kurs?: number;
  Verhaeltnis?: number;
  Rundung?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
