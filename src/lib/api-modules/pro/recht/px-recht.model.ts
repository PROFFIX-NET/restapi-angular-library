import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Recht
 */
export interface PxRecht extends PxRestApiModelInterface {
  Modul?: string;
  Form?: string;
  Menu?: string;
  Recht?: string;
}
