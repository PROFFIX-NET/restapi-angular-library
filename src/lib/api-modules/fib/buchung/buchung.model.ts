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
  Buchungsdatum?: Date;
  Belegdatum?: Date;
  Belegnummer?: number;
  Kondition?: Kondition;
  Buchungsart?: Buchungsart;
  EinzahlungMitteilung?: string;
  Verfalldatum?: Date;
  Adresse?: Adresse;
  EsrKodierzeile?: string;
  EsrPruefziffer?: string;
  Herkunft?: number;
  Buchungen?: Buchungszeile[];
}
