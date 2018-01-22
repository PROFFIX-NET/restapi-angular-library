import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /ZEI/Stundensperre
 */
export interface PxStundensperre extends PxRestApiModelInterface {
  SperrDatum?: string;
}
