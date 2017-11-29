import { RestApiModelInterface } from '../../';

/**
 * Model für /LAG/Charge
 */
export interface Charge extends RestApiModelInterface {
  ChargeNr?: string;
  Bezeichnung?: string;
  Inaktiv?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
