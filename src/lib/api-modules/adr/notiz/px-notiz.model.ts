import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';
import { PxAdresse } from '../adresse/px-adresse.model';
import { PxKontakt } from '../kontakt/px-kontakt.model';
import { PxMitarbeiter } from '../../pro/mitarbeiter/px-mitarbeiter.model';
import { PxNotizart } from '../notizart/px-notizart.model';


/**
 * Model für /ADR/Notiz
 */
export interface PxNotiz extends PxRestApiModelInterface {
  NotizNr?: number;
  Adresse?: PxAdresse;
  Kontakt?: PxKontakt;
  Mitarbeiter?: PxMitarbeiter;
  Notizart?: PxNotizart;
  Datum?: string;
  Termin?: string;
  Notiz?: string;
  NotizRTF?: string;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
