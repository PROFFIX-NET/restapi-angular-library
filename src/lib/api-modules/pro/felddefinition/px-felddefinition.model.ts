import { PxRestApiModelInterface } from "../../base-interfaces/px-rest-api-model-interface";

/**
 * Model für /PRO/Felddefinition
 */
export interface PxFelddefinition extends PxRestApiModelInterface {
  Tabellenname?: string;
  Feldname?: string;
  Tabellentitel?: string;
  Feldtitel?: string;
  Dezimalstellen?: number;
  Datentyp?: string;
  Standardwert?: string;
  Eingabetyp?: string;
  Format?: string;
  Laenge?: number;
  Auswahl?: string[];
  Zusatzfeld?: boolean;
  Zusatztabelle?: boolean;
}
