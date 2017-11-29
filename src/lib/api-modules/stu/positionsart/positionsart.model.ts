import { RestApiModelInterface, Waehrung, Konto, Kostenart, Kostenstelle, Steuercode } from '../../';

/**
 * Model für /STU/Positionsart
 */
export interface Positionsart extends RestApiModelInterface {
  PositionsartNr?: number;
  Bezeichnung?: string;
  Vorgabezeit?: number;
  LohnperiodePlus?: boolean;
  Waehrung?: Waehrung;
  Steuercode?: Steuercode;
  Ertragskonto?: Konto;
  Kostenstelle?: Kostenstelle;
  Kostenart?: Kostenart;
  KeinRabatt?: boolean;
  Ferien?: boolean;
  StdPreis?: number;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
