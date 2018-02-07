import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKontoklasse } from "../kontoklasse/px-kontoklasse.model";
import { PxJaNeinDarf } from "../px-ja-nein-darf.enum";
import { PxKostenstelle } from "../kostenstelle/px-kostenstelle.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";


/**
 * Model für /FIB/Konto
 */
export interface PxKonto extends PxRestApiModelInterface {
  KontoNr?: string;
  Bezeichnung?: string;
  Steuercode?: PxSteuercode;
  Kontoklasse?: PxKontoklasse;
  Kostenstelle?: PxKostenstelle;
  KostenstelleZwingend?: PxJaNeinDarf;
  KostenstelleFix?: boolean;
  Kostenart?: boolean;
  KostenartZwingend?: PxJaNeinDarf;
  KostenartFix?: boolean;
  Waehrung?: PxWaehrung;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
