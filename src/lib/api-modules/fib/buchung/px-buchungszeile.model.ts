import { PxAuftrag } from "../../pro/auftrag/px-auftrag.model";
import { PxBelegart } from "../../pro/belegart/px-belegart.model";
import { PxBetrag } from "./px-betrag.model";
import { PxKonto } from "../konto/px-konto.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxZahlungsart } from "../../adr/zahlungsart/px-zahlungsart.model";
import { PxBuchungsart } from "../buchungsart/px-buchungsart.model";

/**
 * Model für Buchungszeilen in /FIB/Buchung
 */
export interface PxBuchungszeile {
  BuchungszeileNr?: number;
  Buchungsart?: PxBuchungsart;
  Auftrag?: PxAuftrag;
  Belegart?: PxBelegart;
  Betraege?: PxBetrag[];
  EsrNummer?: number;
  EinzahlungName?: string;
  HabenKonto?: PxKonto;
  SollKonto?: PxKonto;
  Waehrung?: PxWaehrung;
  Kurs?: number;
  MahnCode?: number;
  MahnDatum?: string;
  Steuercode?: PxSteuercode;
  SteuerbetragFW?: number;
  SteuerbetragSW?: number;
  SteuerbuchungFW?: number;
  SteuerbuchungSW?: number;
  SteuerbetragSaldobesteuerungFW?: number;
  SteuerbetragSaldobesteuerungSW?: number;
  IstSteuerbuchung?: boolean;
  IstErfassteBuchung?: boolean;
  Zahlungsart?: PxZahlungsart;
  Zahlungsdatum?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeandertAm?: string;
  GeandertVon?: string;
  Zusatzfelder?: any;
}
