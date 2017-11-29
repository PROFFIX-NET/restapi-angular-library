import { RestApiModelInterface, Land } from '../../';

/**
 * Model für /PRO/Region
 */
export interface Region extends RestApiModelInterface {
  RegionNr?: string;
  Bezeichnung?: string;
  Land?: Land;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
