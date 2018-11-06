import { PxInfo } from '../api-modules/pro/info/px-info.model';
import { PxVersion } from '../api-modules/pro/info/px-version.model';
import { PxModule } from '../api-modules/pro/login/px-module.enum';

/**
 * Abstrakte Konfigurationsklasse von der vererbt werden muss und die abstrakten Methoden müssen
 * die benötigten Werte zurückgeben. Die vererbte Klasse muss dem Injector übergeben werden:
 * providers: [ MyAppConfiguration, { provide: Configuration, useExisting: MyAppConfiguration } ]
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
  public abstract get requiredLicencedModules(): PxModule[];

  /**
   * Gibt die benötigten Module (welche lizenziert werden) als String Array zurück
   */
  public getRequiredLicencedModulesAsStringArray(): string[] {
    const a: string[] = [];
    for (const m of this.requiredLicencedModules) {
      a.push(PxModule[m]);
    }
    return a;
  }
}
