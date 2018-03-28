import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKontoklasse } from "../kontoklasse/px-kontoklasse.model";
import { PxJaNeinDarf } from "../px-ja-nein-darf.enum";
import { PxKostenstelle } from "../kostenstelle/px-kostenstelle.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";


/**
 * Model für /FIB/Konto/{KontoNr}/Saldo
 */
export interface PxKontoSaldo extends PxRestApiModelInterface {
  SaldoSW?: number;
  SaldoFW?: number;
}
