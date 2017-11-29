import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Kondition
 */
export interface Kondition extends RestApiModelInterface {
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
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
