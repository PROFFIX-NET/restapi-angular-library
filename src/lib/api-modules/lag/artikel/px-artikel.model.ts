import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";
import { PxEinheit } from "../../pro/einheit/px-einheit.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKonto } from "../../fib/konto/px-konto.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxLagerort } from "../lagerort/px-lagerort.model";
import { PxLagerplatz } from "../lagerplatz/px-lagerplatz.model";

/**
 * Model für /LAG/Artikel
 */
export interface PxArtikel extends PxRestApiModelInterface {
  ArtikelNr?: string;
  Bezeichnung1?: string;
  Bezeichnung2?: string;
  Bezeichnung3?: string;
  Bezeichnung4?: string;
  Bezeichnung5?: string;
  Geloescht?: boolean;
  Waehrung?: PxWaehrung;
  EinheitLager?: PxEinheit;
  EinheitRechnung?: PxEinheit;
  Dim1?: number;
  Dim2?: number;
  Dim3?: number;
  Verkauftspreis1?: number;
  Verkauftspreis2?: number;
  Verkauftspreis3?: number;
  Verkauftspreis4?: number;
  Verkauftspreis5?: number;
  Steuercode?: PxSteuercode;
  Ertragskonto?: PxKonto;
  Kostenstelle?: PxKostenstelle;
  Kostenart?: PxKostenart;
  KeinRabatt?: boolean;
  Barcode?: string;
  Lagerort?: PxLagerort;
  Lagerplatz?: PxLagerplatz;
  SerieNrVerwenden?; boolean;
  ChargeVerwenden?: boolean;
  Steuercode1?: PxSteuercode;
  Steuercode2?: PxSteuercode;
  Steuercode3?: PxSteuercode;
  Steuercode4?: PxSteuercode;
  Steuercode5?: PxSteuercode;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
