import { RestApiModelInterface } from '../../';

/**
 * Model für /ZEI/Stundensperre
 */
export interface Stundensperre extends RestApiModelInterface {
  SperrDatum?: string;
}
