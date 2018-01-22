import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxLand } from "../land/px-land.model";

/**
 * Model für /PRO/Region
 */
export interface PxRegion extends PxRestApiModelInterface {
  RegionNr?: string;
  Bezeichnung?: string;
  Land?: PxLand;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
