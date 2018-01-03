import { RestApiModelInterface, Adresse, Bank, Konto } from '../../';

/**
 * Model für /ADR/Zahlungsart
 */
export interface Zahlungsart extends RestApiModelInterface {
  ZahlungsartNr?: number;
  Adresse?: Adresse;
  BankBelegNummer?: number;
  Bank?: Bank;
  Beguenstigter?: Adresse;
  BelastenVon?: Zahlungsart;
  EigeneZahlungsart?: boolean;
  FormCode?: string;
  HauptZahlungsart?: boolean;
  Inaktiv?: boolean;
  KontonummerBank?: string;
  Konto?: Konto;
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
