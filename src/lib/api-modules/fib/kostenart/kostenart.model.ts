import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kostenart
 */
export interface Kostenart extends RestApiModelInterface {
  KostenartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
