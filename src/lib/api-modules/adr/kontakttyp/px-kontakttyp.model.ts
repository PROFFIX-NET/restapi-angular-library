import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';

/**
 * Model /ADR/Kontakttyp
 */
export interface PxKontakttyp extends PxRestApiModelInterface {
  KontakttypNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
