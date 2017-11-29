/**
 * Model für die Verbindungseinstellungen zur REST API
 */
export interface ConnectionSettings {

  /**
   * Webservice URL bis zur Modulbezeichnung z.B https://api.test.com/pxapi/v2
   */
  WebserviceUrl: string;

  /**
   * Webservice Passwort als SHA256 Hash
   */
  WebservicePasswortHash: string;
}
