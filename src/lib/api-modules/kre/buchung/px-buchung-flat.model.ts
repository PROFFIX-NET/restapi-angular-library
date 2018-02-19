import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';
import { PxKondition } from '../../pro/kondition/px-kondition.model';
import { PxBuchungsart } from '../../fib/buchungsart/px-buchungsart.model';
import { PxAdresse } from '../../adr/adresse/px-adresse.model';
import { PxBuchungszeile } from './px-buchungszeile.model';
import { PxAuftrag } from "../../pro/auftrag/px-auftrag.model";
import { PxBelegart } from "../../pro/belegart/px-belegart.model";
import { PxKonto } from "../../fib/konto/px-konto.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";

/**
 * Model für /KRE/Buchung/Flat
 */
export interface PxBuchungFlat extends PxRestApiModelInterface {
  BuchungNr?: number;
  Buchungsdatum?: string;
  Belegdatum?: string;
  Belegnummer?: number;
  Kondition?: PxKondition;
  Buchungsart?: PxBuchungsart;
  EinzahlungMitteilung?: string;
  Verfalldatum?: string;
  Adresse?: PxAdresse;
  EsrKodierzeile?: string;
  EsrPruefziffer?: string;
  Herkunft?: number;
  Buchungen?: PxBuchungszeile[];
  Auftrag?: PxAuftrag;
  Belegart?: PxBelegart;
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
  Zahlungsdatum?: string;
  IstSteuerbuchung?: boolean;
  IstErfassteBuchung?: boolean;
  BetragFW?: number;
  BetragSW?: number;
  Buchungstext?: string;
  Kostenart?: PxKostenart;
  Kostenstelle?: PxKostenstelle;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeandertAm?: string;
  GeandertVon?: string;
  Zusatzfelder?: any;
}
