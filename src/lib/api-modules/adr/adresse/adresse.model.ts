import {
  RestApiModelInterface,
  Adressgruppe,
  Region,
  Land,
  Steuercode,
  Konto,
  Kostenstelle,
  Kostenart,
  Vertreter,
  Waehrung
} from '../../';

/**
 * Model für /ADR/Adresse
 */
export interface Adresse extends RestApiModelInterface {
  AdressNr?: number;
  Name?: string;
  Vorname?: string;
  Strasse?: string;
  PLZ?: string;
  Ort?: string;
  Geloescht?: boolean;
  Adressgruppen?: Adressgruppe[];
  Anrede?: string;
  Bemerkungen?: string;
  EMail?: string;
  TelDirekt?: string;
  TelZentrale?: string;
  TelPrivat?: string;
  Fax?: string;
  Mobiltelefon?: string;
  Homepage?: string;
  PLZPostfach?: string;
  Postfach?: string;
  Region?: Region;
  Land?: Land;
  Longitude?: number;
  Latitude?: number;
  DebitorenSteuercode?: Steuercode;
  DebitorenSteuercodeVerwenden?: boolean;
  DebitorenErtragskonto?: Konto;
  DebitorenErtragskontoVerwenden?: boolean;
  DebitorenKostenstelle?: Kostenstelle;
  DebitorenKostenstelleVerwenden?: boolean;
  DebitorenKostenart?: Kostenart;
  DebitorenKostenartVerwenden?: boolean;
  DebitorenRabatt?: number;
  Vertreter?: Vertreter;
  DebitorenWaehrung?: Waehrung;
  Lagerpreis?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
