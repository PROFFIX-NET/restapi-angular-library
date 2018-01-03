import { RestApiModelInterface, Adresse } from '../../';

/**
 * Model /STU/Projekt
 */
export interface Projekt extends RestApiModelInterface {
  ProjektNr?: string;
  Bezeichnung?: string;
  Adresse?: Adresse;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
