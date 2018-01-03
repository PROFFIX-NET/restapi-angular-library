import { RestApiModelInterface } from '../../';

/**
 * Model für /STU/Spesenart
 */
export interface Spesenart extends RestApiModelInterface {
  SpesenartNr?: number;
  Bezeichnung?: string;
  Betrag?: number;
  TextZwang?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
