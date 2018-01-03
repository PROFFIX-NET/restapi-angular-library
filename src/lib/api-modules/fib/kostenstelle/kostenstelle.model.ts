import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kostenstelle
 */
export interface Kostenstelle extends RestApiModelInterface {
  KostenstelleNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
