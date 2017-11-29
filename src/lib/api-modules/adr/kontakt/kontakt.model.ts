import { RestApiModelInterface, Kontakttyp, Adresse, Region, Land } from '../../';

/**
 * Model für /ADR/Kontakt
 */
export interface Kontakt extends RestApiModelInterface {
  KontaktNr?: number;
  Kontakttyp?: Kontakttyp;
  Adresse?: Adresse;
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
  Region?: Region;
  Land?: Land;
  Hauptadresse?: boolean;
  AdresseGleichHauptadresse?: boolean;
  ErstelltAm?: Date;
  ErstelltVon?: string;
  GeaendertAm?: Date;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
