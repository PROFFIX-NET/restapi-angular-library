import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';
import { PxAdresse } from '../adresse/px-adresse.model';
import { PxBank } from '../../pro/bank/px-bank.model';
import { PxKonto } from '../../fib/konto/px-konto.model';


/**
 * Model für /ADR/Zahlungsart
 */
export interface PxZahlungsart extends PxRestApiModelInterface {
  ZahlungsartNr?: number;
  Adresse?: PxAdresse;
  BankBelegNummer?: number;
  Bank?: PxBank;
  Beguenstigter?: PxAdresse;
  BelastenVon?: PxZahlungsart;
  EigeneZahlungsart?: boolean;
  FormCode?: string;
  HauptZahlungsart?: boolean;
  Inaktiv?: boolean;
  KontonummerBank?: string;
  Konto?: PxKonto;
  PostcheckNummer?: string;
  Spesenregelung?: number;
  SwiftNummer?: string;
  TeilnehmerNummer?: string;
  ZahlArt?: number;
  ZahlungsartTyp?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
