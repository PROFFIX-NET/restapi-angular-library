import { RestApiModelInterface } from '../../';

/**
 * Model für /FIB/Kostenart
 */
export interface Kostenart extends RestApiModelInterface {
  KostenartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
