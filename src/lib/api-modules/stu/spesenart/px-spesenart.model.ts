import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /STU/Spesenart
 */
export interface PxSpesenart extends PxRestApiModelInterface {
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
