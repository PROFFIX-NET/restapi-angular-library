import { RestApiModelInterface, Waehrung } from '../../';

/**
 * Model für /PRO/Land
 */
export interface Land extends RestApiModelInterface {
  LandNr?: string;
  Bezeichnung?: string;
  Vorwahl?: string;
  Waehrung?: Waehrung;
  SADCode?: number;
  CodePost?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
