import { RestApiModelInterface, Einheit } from '../../';

/**
 * Model für /PRO/Einheitsmatrix
 */
export interface Einheitsmatrix extends RestApiModelInterface {
  EinheitLager?: Einheit;
  EinheitRechnung?: Einheit;
  Bezeichnung?: string;
  EinheitDim1?: string;
  EinheitDim2?: string;
  EinheitDim3?: string;
  RechnenDim1?: boolean;
  RechnenDim2?: boolean;
  RechnenDim3?: boolean;
  Divisor?: number;
  Multiplikator?: number;
  Rundung?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
