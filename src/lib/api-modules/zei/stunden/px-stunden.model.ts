import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxMitarbeiter } from "../../pro/mitarbeiter/px-mitarbeiter.model";
import { PxStundenart } from "../stundenart/px-stundenart.model";

/**
 * Model für /ZEI/Stunden
 */
export interface PxStunden extends PxRestApiModelInterface {
  StundenNr?: number;
  Mitarbeiter?: PxMitarbeiter;
  Stundenart?: PxStundenart;
  Datum?: string;
  StartZeit?: string;
  EndZeit?: string;
  Stunden?: number;
  Pause?: number;
  KaWo?: string;
  Quelle?: string;
  QuelleStop?: string;
  Bemerkungen?: string;
  Longitude?: number;
  Latitude?: number;
  Accuryca?: number;
  LongitudeStop?: number;
  LatitudeStop?: number;
  AccurycaStop?: number;
  Kuerzung?: boolean;
  KuerzungMonat?: boolean;
  gesperrt?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
