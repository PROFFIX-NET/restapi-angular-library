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
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
