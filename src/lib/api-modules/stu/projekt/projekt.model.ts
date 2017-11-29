import { RestApiModelInterface, Adresse } from '../../';

/**
 * Model /STU/Projekt
 */
export interface Projekt extends RestApiModelInterface {
  ProjektNr?: string;
  Bezeichnung?: string;
  Adresse?: Adresse;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
