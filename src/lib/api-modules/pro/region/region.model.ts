import { RestApiModelInterface, Land } from '../../';

/**
 * Model für /PRO/Region
 */
export interface Region extends RestApiModelInterface {
  RegionNr?: string;
  Bezeichnung?: string;
  Land?: Land;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
