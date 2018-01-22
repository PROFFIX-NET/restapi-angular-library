import { PxRestApiModelInterface } from '../../base-interfaces/px-rest-api-model-interface';
import { PxKontakttyp } from '../kontakttyp/px-kontakttyp.model';
import { PxAdresse } from '../adresse/px-adresse.model';
import { PxRegion } from '../../pro/region/px-region.model';
import { PxLand } from '../../pro/land/px-land.model';


/**
 * Model für /ADR/Kontakt
 */
export interface PxKontakt extends PxRestApiModelInterface {
  KontaktNr?: number;
  Kontakttyp?: PxKontakttyp;
  Adresse?: PxAdresse;
  Titel?: string;
  Name?: string;
  Vorname?: string;
  Strasse?: string;
  PLZ?: string;
  Ort?: string;
  Geloescht?: boolean;
  Anrede?: string;
  Bemerkungen?: string;
  EMail?: string;
  TelDirekt?: string;
  TelZentrale?: string;
  TelPrivat?: string;
  Fax?: string;
  Mobiltelefon?: string;
  Homepage?: string;
  Region?: PxRegion;
  Land?: PxLand;
  Hauptadresse?: boolean;
  AdresseGleichHauptadresse?: boolean;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
