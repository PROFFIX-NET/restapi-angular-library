import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';

/**
 * Model für /PRO/Kondition
 */
export interface PxKondition extends PxRestApiModelInterface {
  KonditionNr?: number;
  Bezeichnung?: string;
  Inaktiv?: boolean;
  EndeJahr?: boolean;
  EndeMonat?: boolean;
  EndeQuartal?: boolean;
  NettoTage?: number;
  Skonto1Tage?: number;
  Skonto1Prozent?: number;
  Skonto2Tage?: number;
  Skonto2Prozent?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
