import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";

/**
 * Model für Beträge in /KRE/Buchung
 */
export interface PxBetrag {
  BetragFW?: number;
  BetragSW?: number;
  Buchungstext?: string;
  Kostenart?: PxKostenart;
  Kostenstelle?: PxKostenstelle;
}
