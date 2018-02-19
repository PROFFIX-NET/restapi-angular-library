import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';
import { PxKondition } from '../../pro/kondition/px-kondition.model';
import { PxBuchungsart } from '../../fib/buchungsart/px-buchungsart.model';
import { PxAdresse } from '../../adr/adresse/px-adresse.model';
import { PxBuchungszeile } from './px-buchungszeile.model';


/**
 * Model für /KRE/Buchung
 */
export interface PxBuchung extends PxRestApiModelInterface {
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
}
