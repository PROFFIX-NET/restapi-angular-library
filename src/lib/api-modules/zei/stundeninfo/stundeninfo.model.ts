import { RestApiModelInterface } from '../../';

/**
 * Model für /ZEI/Stundeninfo
 */
export interface Stundeninfo extends RestApiModelInterface {
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
