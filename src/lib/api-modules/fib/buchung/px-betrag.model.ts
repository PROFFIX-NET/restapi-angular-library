import { PxKostenart } from "../kostenart/px-kostenart.model";
import { PxKostenstelle } from "../kostenstelle/px-kostenstelle.model";

/**
 * Model für Beträge in /FIB/Buchung
 */
export interface PxBetrag {
  BetragFW?: number;
  BetragSW?: number;
  Buchungstext?: string;
  Kostenart?: PxKostenart;
  Kostenstelle?: PxKostenstelle;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
}
