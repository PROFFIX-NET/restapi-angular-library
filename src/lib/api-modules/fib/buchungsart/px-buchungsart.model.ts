import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxBelegart } from "../../pro/belegart/px-belegart.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKonto } from "../konto/px-konto.model";


/**
 * Model für /FIB/Buchungsart
 */
export interface PxBuchungsart extends PxRestApiModelInterface {
  BuchungsartNr?: string;
  Bezeichnung?: string;
  Bereich?: number;
  Typ?: number;
  BetragsvorschlagFw?: number;
  Belegart?: PxBelegart;
  BuchungVorzeichen?: number;
  Buchungstextvorschlag?: string;
  Eroeffnungsbuchung?: boolean;
  Hauptbuchungsart?: boolean;
  Inaktiv?: boolean;
  KeinKontoVorschlag?: boolean;
  Sammelbuchung?: boolean;
  SammelbuchungBuchungsart?: PxBuchungsart;
  SkontoRueckbuchung?: boolean;
  Steuercode?: PxSteuercode;
  SteuerRueckbuchung?: boolean;
  UmsatzBuchung?: boolean;
  BuchungsartenKonten?: {
    Habenkonto?: PxKonto;
    SollKonto?: PxKonto;
    Hauptkonto?: boolean;
    ErstelltAm?: string;
    ErstelltVon?: string;
    GeaendertAm?: string;
    GeaendertVon?: string;
    Zusatzfelder?: any;
  }[];
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
