import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxBenutzerEinstellungLevel } from "./px-benutzer-einstellung-level.enum";

/**
 * Model für /PRO/Einstellung
 */
export interface PxBenutzerEinstellung extends PxRestApiModelInterface {
  Schluessel?: string;
  Wert?: string;
  Level?: PxBenutzerEinstellungLevel;
}
