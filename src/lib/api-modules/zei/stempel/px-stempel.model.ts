import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /ZEI/Stempel
 */
export interface PxStempel extends PxRestApiModelInterface {
  Eingestempelt?: boolean;
  EinstempelnZeitpunkt?: string;
  StundenNr?: number;
}
