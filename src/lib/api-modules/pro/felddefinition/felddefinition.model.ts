import { RestApiModelInterface } from '../../';

/**
 * Model für /PRO/Felddefinition
 */
export interface Felddefinition extends RestApiModelInterface {
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
