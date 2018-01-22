import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxAdresse } from "../../adr/adresse/px-adresse.model";

/**
 * Model /STU/Projekt
 */
export interface PxProjekt extends PxRestApiModelInterface {
  ProjektNr?: string;
  Bezeichnung?: string;
  Adresse?: PxAdresse;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
