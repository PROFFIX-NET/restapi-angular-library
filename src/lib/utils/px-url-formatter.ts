import { PxConnectionSettingsService } from "../connection-settings/px-connection-settings.service";

/**
 * Hilfsklasse für die URL Formattierung.
 */

// @dynamic
export class PxUrlFormatter {

  /**
   * Erstellt die komplette URL für einen Endpunkt
   * @param string urlOrEndpoint Endpunkt (z.B PRO/Info) oder komplette URL (wird unverändert zurückgegeben), "/" werden getrimmt
   */
  public static getAbsolutUrl(urlOrEndpoint: string, baseUrl: string ): string {
    if (urlOrEndpoint.startsWith("http")) {
      return urlOrEndpoint;
    }
    return this.trim(baseUrl, "/") + "/" + this.trim(urlOrEndpoint, "/");
  }

  /**
   * Extrahiert den Endpunkt aus einer kompletten URL
   * @param string urlOrEndpoint Endpunkt (z.B PRO/Info) oder komplette URL, "/" werden getrimmt
   */
  public static getEndpoint(urlOrEndpoint: string, baseUrl: string): string {
    baseUrl = this.trim(baseUrl, "/");
    urlOrEndpoint = this.trim(urlOrEndpoint, "/");

    return this.trimStart(this.trimStart(urlOrEndpoint, baseUrl), "/");
  }

  /**
   * Trimmt eine Zeichenkette am Anfang eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  public static trimStart(str: string, separator: string): string {
    if (str && separator) {
      while (str.startsWith(separator)) {
        str = str.substr(separator.length);
      }
    }

    return str;
  }
  /**
   * Trimmt eine Zeichenkette am Ende eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  public static trimEnd(str: string, separator: string): string {
    if (str && separator) {
      while (str.endsWith(separator)) {
        str = str.substr(0, str.length - separator.length);
      }
    }

    return str;
  }

  /**
   * Trimmt eine Zeichenkette am Anfang und Ende eines Strings weg
   * @param str String der getrimmt wird
   * @param separator Zeichen die getrimmt werden
   */
  public static trim(str: string, separator: string): string {
    return this.trimEnd(this.trimStart(str, separator), separator);
  }
}
