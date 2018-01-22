import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxMitarbeiter } from "../../pro/mitarbeiter/px-mitarbeiter.model";
import { PxAuftrag } from "../../pro/auftrag/px-auftrag.model";
import { PxProjekt } from "../projekt/px-projekt.model";
import { PxArtikel } from "../../lag/artikel/px-artikel.model";
import { PxEinheit } from "../../pro/einheit/px-einheit.model";
import { PxPositionsart } from "../positionsart/px-positionsart.model";
import { PxSpesenart } from "../spesenart/px-spesenart.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";
import { PxKonto } from "../../fib/konto/px-konto.model";
import { PxVertreter } from "../../pro/vertreter/px-vertreter.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxAdresse } from "../../adr/adresse/px-adresse.model";
import { PxSerieNummer } from "../../lag/serie-nummer/px-serie-nummer.model";
import { PxLagerort } from "../../lag/lagerort/px-lagerort.model";
import { PxLagerplatz } from "../../lag/lagerplatz/px-lagerplatz.model";
import { PxCharge } from "../../lag/charge/px-charge.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";

/**
 * Model für /STU/Rapport
 */
export interface PxRapport extends PxRestApiModelInterface {
  RapportNr?: string;
  Mitarbeiter?: PxMitarbeiter;
  Auftrag?: PxAuftrag;
  Projekt?: PxProjekt;
  Artikel?: PxArtikel;
  Bezeichnun1?: string;
  Bezeichnung2?: string;
  Bezeichnung3?: string;
  Bezeichnung4?: string;
  Bezeichnung5?: string;
  Einheit?: PxEinheit;
  EinheitRechnung?: PxEinheit;
  Menge?: number;
  MengeVerr?: number;
  Dim1?: number;
  Dim2?: number;
  Dim3?: number;
  Lagerpreis?: number;
  Datum?: string;
  Positionsart?: PxPositionsart;
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
    Spesenart?: PxSpesenart;
    Betrag?: number;
    Waehrung?: PxWaehrung;
    Kurs?: number;
    Text?: string;
  }[];
  PeriodeLohn?: string;
  PreisFW?: number;
  TotalFW?: number;
  SteuerFW?: number;
  Rabatt?: number;
  RabattFW?: number;
  Waehrung?: PxWaehrung;
  Kurs?: number;
  Ertragskonto?: PxKonto;
  Vertreter?: PxVertreter;
  Kostenart?: PxKostenart;
  Kostenstelle?: PxKostenstelle;
  EmpfaengerAdr?: PxAdresse;
  SerieNummern?: {
    SerieNummer?: PxSerieNummer;
    Lagerort?: PxLagerort;
    Lagerplatz?: PxLagerplatz
  }[];
  Chargen?: {
    Charge?: PxCharge;
    Menge?: number;
    SerieNummer?: PxSerieNummer;
    Lagerort?: PxLagerort;
    Lagerplatz?: PxLagerplatz;
  }[];
  Lagerorte?: {
    Menge?: number;
    Lagerort?: PxLagerort;
    Lagerplatz?: PxLagerplatz;
  }[];
  Verrechnen?: boolean;
  Steuercode?: PxSteuercode;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
