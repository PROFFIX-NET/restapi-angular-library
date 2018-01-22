import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';

/**
 * Model für /PRO/Info
 */
export interface PxInfo extends PxRestApiModelInterface {
  Version?: string;
  ServerZeit?: string;
}
