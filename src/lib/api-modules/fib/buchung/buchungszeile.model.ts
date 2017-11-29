import {
  Auftrag,
  Belegart,
  Konto,
  Waehrung,
  Steuercode,
  Zahlungsart,
  Betrag
} from "../../";

/**
 * Model für Buchungszeilen in /FIB/Buchung
 */
export interface Buchungszeile {
  Auftrag?: Auftrag;
  Belegart?: Belegart;
  Betraege?: Betrag[];
  EsrNummer?: number;
  EinzahlungName?: string;
  HabenKonto?: Konto;
  SollKonto?: Konto;
  Waehrung?: Waehrung;
  Kurs?: number;
  MahnCode?: number;
  MahnDatum?: Date;
  Steuercode?: Steuercode;
  SteuerbetragFW?: number;
  SteuerbetragSW?: number;
  SteuerbuchungFW?: number;
  SteuerbuchungSW?: number;
  SteuerbetragSaldobesteuerungFW?: number;
  SteuerbetragSaldobesteuerungSW?: number;
  IstSteuerbuchung?: boolean;
  IstErfassteBuchung?: boolean;
  Zahlungsart?: Zahlungsart;
  Zahlungsdatum?: Date;
  ErstelltAm?: Date;
  ErstelltVon?: String;
  GeandertAm?: Date;
  GeandertVon?: String;
  Zusatzfelder?: any;
}
