import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";
import { PxAdressgruppe } from "../adressgruppe/px-adressgruppe.model";
import { PxRegion } from "../../pro/region/px-region.model";
import { PxLand } from "../../pro/land/px-land.model";
import { PxSteuercode } from "../../pro/steuercode/px-steuercode.model";
import { PxKonto } from "../../fib/konto/px-konto.model";
import { PxKostenstelle } from "../../fib/kostenstelle/px-kostenstelle.model";
import { PxKostenart } from "../../fib/kostenart/px-kostenart.model";
import { PxVertreter } from "../../pro/vertreter/px-vertreter.model";
import { PxWaehrung } from "../../pro/waehrung/px-waehrung.model";

/**
 * Model für /ADR/Adresse
 */
export interface PxAdresse extends PxRestApiModelInterface {
  AdressNr?: number;
  Name?: string;
  Vorname?: string;
  Strasse?: string;
  PLZ?: string;
  Ort?: string;
  Geloescht?: boolean;
  Adressgruppen?: PxAdressgruppe[];
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
  Region?: PxRegion;
  Land?: PxLand;
  Longitude?: number;
  Latitude?: number;
  DebitorenSteuercode?: PxSteuercode;
  DebitorenSteuercodeVerwenden?: boolean;
  DebitorenErtragskonto?: PxKonto;
  DebitorenErtragskontoVerwenden?: boolean;
  DebitorenKostenstelle?: PxKostenstelle;
  DebitorenKostenstelleVerwenden?: boolean;
  DebitorenKostenart?: PxKostenart;
  DebitorenKostenartVerwenden?: boolean;
  DebitorenRabatt?: number;
  Vertreter?: PxVertreter;
  DebitorenWaehrung?: PxWaehrung;
  Lagerpreis?: number;
  ErstelltAm?: string;
  ErstelltVon?: string;
  GeaendertAm?: string;
  GeaendertVon?: string;
  Zusatzfelder?: any;
}
