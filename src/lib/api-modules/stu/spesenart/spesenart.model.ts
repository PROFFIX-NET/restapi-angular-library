import { RestApiModelInterface } from '../../';

/**
 * Model für /STU/Spesenart
 */
export interface Spesenart extends RestApiModelInterface {
  SpesenartNr?: number;
  Bezeichnung?: string;
  Betrag?: number;
  TextZwang?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
