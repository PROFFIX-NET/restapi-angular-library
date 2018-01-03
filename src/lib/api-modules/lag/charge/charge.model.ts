import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Charge
 */
export interface Charge extends RestApiModelInterface {
  ChargeNr?: string;
  Bezeichnung?: string;
  Inaktiv?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
