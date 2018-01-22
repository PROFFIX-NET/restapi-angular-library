import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';

/**
 * Model für /ADR/Adressgruppe
 */
export interface PxAdressgruppe extends PxRestApiModelInterface {
  AdressgruppeNr?: string;
  Bezeichnung?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
