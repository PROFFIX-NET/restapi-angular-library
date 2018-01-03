import { RestApiModelInterface, Konto } from '../../';

/**
 * Model für /PRO/Steuercode
 */
export interface Steuercode extends RestApiModelInterface {
  SteuercodeNr?: number;
  Bezeichnung?: string;
  Prozent?: number;
  InklusivMWST?: boolean;
  Konto?: Konto;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
