import { RestApiModelInterface } from '../../';

/**
 * Model für /ZEI/Stempel
 */
export interface Stempel extends RestApiModelInterface {
  Eingestempelt?: boolean;
  EinstempelnZeitpunkt?: string;
  StundenNr?: number;
}
