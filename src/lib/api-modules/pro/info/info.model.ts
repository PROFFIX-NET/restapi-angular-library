import { RestApiModelInterface } from '../../base-interfaces';

/**
 * Model für /PRO/Info
 */
export interface Info extends RestApiModelInterface {
  Version?: string;
  ServerZeit?: Date;
}
