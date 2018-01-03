import { RestApiModelInterface, Belegart, Steuercode, Konto } from '../../';

/**
 * Model für /FIB/Buchungsart
 */
export interface Buchungsart extends RestApiModelInterface {
  BuchungsartNr?: string;
  Bezeichnung?: string;
  Bereich?: number;
  Typ?: number;
  BetragsvorschlagFw?: number;
  Belegart?: Belegart;
  BuchungVorzeichen?: number;
  Buchungstextvorschlag?: string;
  Eroeffnungsbuchung?: boolean;
  Hauptbuchungsart?: boolean;
  Inaktiv?: boolean;
  KeinKontoVorschlag?: boolean;
  Sammelbuchung?: boolean;
  SammelbuchungBuchungsart?: Buchungsart;
  SkontoRueckbuchung?: boolean;
  Steuercode?: Steuercode;
  SteuerRueckbuchung?: boolean;
  UmsatzBuchung?: boolean;
  BuchungsartenKonten?: {
    Habenkonto?: Konto;
    SollKonto?: Konto;
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
