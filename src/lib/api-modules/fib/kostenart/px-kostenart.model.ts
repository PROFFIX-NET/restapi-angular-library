import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /FIB/Kostenart
 */
export interface PxKostenart extends PxRestApiModelInterface {
  KostenartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
