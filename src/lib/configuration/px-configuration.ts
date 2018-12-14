import { PxVersion } from '../info/px-version.model';

/**
 * Abstrakte Konfigurationsklasse von der vererbt werden muss und die abstrakten Methoden müssen
 * die benötigten Werte zurückgeben. Die vererbte Klasse muss dem Injector übergeben werden:
 * providers: [ MyAppConfiguration, { provide: PxConfiguration, useExisting: MyAppConfiguration } ]
 */
export abstract class PxConfiguration {

  /**
   * Muss überschrieben werden. Der Client Name wird für das laden / speichern der Benutzereinstellungen benötigt.
   */
  public abstract get clientName(): string;

  /**
   * Muss überschrieben werden und die minimal benötigte Webservice Version zurückgeben
   */
  public abstract get requiredWebserviceVersion(): PxVersion;

  /**
   * Muss überschrieben werden und die benötigten Module (welche lizenziert werden) zurückgeben
   */
  public abstract get requiredLicencedModules(): string[];
}
