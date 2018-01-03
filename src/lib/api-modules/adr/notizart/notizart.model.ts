import { RestApiModelInterface } from '../../';

/**
 * Model für /ADR/Notizart
 */
export interface Notizart extends RestApiModelInterface {
  NotizartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
