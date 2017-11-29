import { RestApiModelInterface } from '../../';

/**
 * Model für /ADR/Notizart
 */
export interface Notizart extends RestApiModelInterface {
  NotizartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
