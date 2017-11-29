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
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
