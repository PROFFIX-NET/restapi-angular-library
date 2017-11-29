import { RestApiModelInterface, Waehrung, Einheit, Konto, Kostenstelle, Kostenart, Lagerort, Lagerplatz, Steuercode } from '../../';

/**
 * Model für /LAG/Artikel
 */
export interface Artikel extends RestApiModelInterface {
  ArtikelNr?: string;
  Bezeichnung1?: string;
  Bezeichnung2?: string;
  Bezeichnung3?: string;
  Bezeichnung4?: string;
  Bezeichnung5?: string;
  Geloescht?: boolean;
  Waehrung?: Waehrung;
  EinheitLager?: Einheit;
  EinheitRechnung?: Einheit;
  Dim1?: number;
  Dim2?: number;
  Dim3?: number;
  Verkauftspreis1?: number;
  Verkauftspreis2?: number;
  Verkauftspreis3?: number;
  Verkauftspreis4?: number;
  Verkauftspreis5?: number;
  Steuercode?: Steuercode;
  Ertragskonto?: Konto;
  Kostenstelle?: Kostenstelle;
  Kostenart?: Kostenart;
  KeinRabatt?: boolean;
  Barcode?: string;
  Lagerort?: Lagerort;
  Lagerplatz?: Lagerplatz;
  SerieNrVerwenden?; boolean;
  ChargeVerwenden?: boolean;
  Steuercode1?: Steuercode;
  Steuercode2?: Steuercode;
  Steuercode3?: Steuercode;
  Steuercode4?: Steuercode;
  Steuercode5?: Steuercode;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
