import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxAdresse } from "../../adr/adresse/px-adresse.model";
import { PxPositionsart } from "../../stu/positionsart/px-positionsart.model";
import { PxStundenart } from "../../zei/stundenart/px-stundenart.model";

/**
 * Model für /PRO/Mitarbeiter
 */
export interface PxMitarbeiter extends PxRestApiModelInterface {
  MitarbeiterNr?: number;
  Name?: string;
  Kurzzeichen?: string;
  Adresse?: PxAdresse;
  Positionsart?: PxPositionsart;
  Stundenart?: PxStundenart;
  Feriensaldo?: number;
  BadgeID?: string;
  Geloescht?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
