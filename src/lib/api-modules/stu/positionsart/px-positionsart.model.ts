import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKonto } from "../../fib/konto/px-konto.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";

/**
 * Model für /STU/Positionsart
 */
export interface PxPositionsart extends PxRestApiModelInterface {
  PositionsartNr?: number;
  Bezeichnung?: string;
  Vorgabezeit?: number;
  LohnperiodePlus?: boolean;
  Waehrung?: PxWaehrung;
  Steuercode?: PxSteuercode;
  Ertragskonto?: PxKonto;
  Kostenstelle?: PxKostenstelle;
  Kostenart?: PxKostenart;
  KeinRabatt?: boolean;
  Ferien?: boolean;
  StdPreis?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
