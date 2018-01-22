import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxMitarbeiter } from "../mitarbeiter/px-mitarbeiter.model";

/**
 * Model für /PRO/Vertreter
 */
export interface PxVertreter extends PxRestApiModelInterface {
  VertreterNr?: string;
  Name?: string;
  Mitarbeiter?: PxMitarbeiter;
  Geloescht?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
