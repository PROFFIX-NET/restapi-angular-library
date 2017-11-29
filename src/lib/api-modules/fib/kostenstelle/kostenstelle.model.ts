import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kostenstelle
 */
export interface Kostenstelle extends RestApiModelInterface {
  KostenstelleNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
