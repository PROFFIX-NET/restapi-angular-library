import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';

/**
 * Model für /ADR/Notizart
 */
export interface PxNotizart extends PxRestApiModelInterface {
  NotizartNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
