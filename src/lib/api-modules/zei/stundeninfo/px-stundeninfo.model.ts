import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /ZEI/Stundeninfo
 */
export interface PxStundeninfo extends PxRestApiModelInterface {
  TotalTagIst?: number;
  TotalWocheIst?: number;
  TotalMonatIst?: number;
  TotalTagSoll?: number;
  TotalWocheSoll?: number;
  TotalMonatSoll?: number;
  TotalTagDiff?: number;
  TotalWocheDiff?: number;
  TotalMonatDiff?: number;
  SaldoVortag?: number;
}
