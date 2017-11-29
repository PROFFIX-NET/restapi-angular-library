import { Info, Version } from '../api-modules/pro/info';
import { Module } from '../api-modules/pro/login/module.enum';

/**
 * Abstrakte Konfigurationsklasse von der vererbt werden muss und die abstrakten Methoden müssen
 * die benötigten Werte zurückgeben. Die vererbte Klasse muss dem Injector übergeben werden:
 * providers: [ MyAppConfiguration, { provide: Configuration, useExisting: MyAppConfiguration } ]
 */
export abstract class Configuration {

  /**
   * Muss überschrieben werden und die minimal benötigte Webservice Version zurückgeben
   */
  public abstract get requiredWebserviceVersion(): Version;

  /**
   * Muss überschrieben werden und die benötigten Module (welche lizenziert werden) zurückgeben
   */
  public abstract get requiredLicencedModules(): Module[];

  /**
   * Gibt die benötigten Module (welche lizenziert werden) als String Array zurück
   */
  public getRequiredLicencedModulesAsStringArray(): string[] {
    const a: string[] = [];
    for (const m of this.requiredLicencedModules) {
      a.push(Module[m]);
    }
    return a;
  }
}
