import {
  RestApiModelInterface,
  Kondition,
  Adresse,
  Buchungsart,
  Buchungszeile,
} from '../../';

/**
 * Model für /FIB/Buchung
 */
export interface Buchung extends RestApiModelInterface {
  BuchungNr?: number;
  Buchungsdatum?: string;
  Belegdatum?: string;
  Belegnummer?: number;
  Kondition?: Kondition;
  Buchungsart?: Buchungsart;
  EinzahlungMitteilung?: string;
  Verfalldatum?: string;
  Adresse?: Adresse;
  EsrKodierzeile?: string;
  EsrPruefziffer?: string;
  Herkunft?: number;
  Buchungen?: Buchungszeile[];
}
