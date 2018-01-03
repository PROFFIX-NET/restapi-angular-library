import { Kostenstelle, Kostenart } from "../../";

/**
 * Model für Beträge in /FIB/Buchung
 */
export interface Betrag {
  BetragFW?: number;
  BetragSW?: number;
  Buchungstext?: string;
  Kostenart?: Kostenart;
  Kostenstelle?: Kostenstelle;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
}
