import {
  RestApiModelInterface,
  Mitarbeiter,
  Auftrag,
  Projekt,
  Artikel,
  Einheit,
  Positionsart,
  Spesenart,
  Waehrung,
  Konto,
  Kostenart,
  Kostenstelle,
  Vertreter,
  Adresse,
  Lagerort,
  Lagerplatz,
  SerieNummer,
  Charge,
  Steuercode
} from '../../';

/**
 * Model für /STU/Rapport
 */
export interface Rapport extends RestApiModelInterface {
  RapportNr?: string;
  Mitarbeiter?: Mitarbeiter;
  Auftrag?: Auftrag;
  Projekt?: Projekt;
  Artikel?: Artikel;
  Bezeichnun1?: string;
  Bezeichnung2?: string;
  Bezeichnung3?: string;
  Bezeichnung4?: string;
  Bezeichnung5?: string;
  Einheit?: Einheit;
  EinheitRechnung?: Einheit;
  Menge?: number;
  MengeVerr?: number;
  Dim1?: number;
  Dim2?: number;
  Dim3?: number;
  Lagerpreis?: number;
  Datum?: string;
  Positionsart?: Positionsart;
  KaWo?: string;
  StartZeit?: string;
  EndZeit?: string;
  Stunden?: number;
  StundenVerr?: number;
  Pause?: number;
  Bemerkungen?: string;
  BemerkungenRTF?: string;
  Selbstkosten?: number;
  Ueberzeit?: number;
  StdPreis?: number;
  Km?: number;
  Spesen?: {
    Spesenart?: Spesenart;
    Betrag?: number;
    Waehrung?: Waehrung;
    Kurs?: number;
    Text?: string;
  }[];
  PeriodeLohn?: string;
  PreisFW?: number;
  TotalFW?: number;
  SteuerFW?: number;
  Rabatt?: number;
  RabattFW?: number;
  Waehrung?: Waehrung;
  Kurs?: number;
  Ertragskonto?: Konto;
  Vertreter?: Vertreter;
  Kostenart?: Kostenart;
  Kostenstelle?: Kostenstelle;
  EmpfaengerAdr?: Adresse;
  SerieNummern?: {
    SerieNummer?: SerieNummer;
    Lagerort?: Lagerort;
    Lagerplatz?: Lagerplatz
  }[];
  Chargen?: {
    Charge?: Charge;
    Menge?: number;
    SerieNummer?: SerieNummer;
    Lagerort?: Lagerort;
    Lagerplatz?: Lagerplatz;
  }[];
  Lagerorte?: {
    Menge?: number;
    Lagerort?: Lagerort;
    Lagerplatz?: Lagerplatz;
  }[];
  Verrechnen?: boolean;
  Steuercode?: Steuercode;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
