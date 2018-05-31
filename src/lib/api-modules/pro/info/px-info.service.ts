import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxConnectionSettingsService } from '../../../connection-settings/px-connection-settings.service';
import { PxConfiguration } from '../../../configuration/px-configuration';
import { PxInfo } from "./px-info.model";
import { PxVersion } from "./px-version.model";

/**
 * Ruft Informationen über den Webservice über den Endpunkt PRO/Info
 */
@Injectable()
export class PxInfoService implements PxRestApiServiceInterface {

  public endpoint = "PRO/Info";

  constructor(
    private httpService: PxHttpService,
    private connectionSettingsService: PxConnectionSettingsService,
    private configuration: PxConfiguration
  ) { }

  /**
   * Ruft Informationen zum Webservice ab
   */
  public getInfo(): Observable<PxInfo> {
    return this.httpService.get<PxInfo>(this.endpoint, {
      "key": this.connectionSettingsService.current.WebservicePasswortHash
    });
  }

  /**
   * Prüft ob die in der Konfiguration angegebene Version mit dem Webservice kompatibel ist
   */
  public isAppCompatible(): Observable<boolean> {
    return this.getInfo().pipe(map((info: PxInfo) => this.isVersionCompatible(this.parseVersion(info.Version))));
  }

  /**
   * Prüft ob eine Version mit der in der Configuration hinterlegtn Version kompatibel ist.
   * Prüfkriterien: Major muss gleich sein, Minor muss gleich oder grösser sein, Patch muss grösser sein, wenn Minor gleich ist
   *
   * @param version Version zum überprüften
   */
  private isVersionCompatible(version: PxVersion): boolean {
    const requiredVersion = this.configuration.requiredWebserviceVersion;
    return requiredVersion.Major === version.Major &&
      (requiredVersion.Minor < version.Minor ||
        (requiredVersion.Minor === version.Minor && requiredVersion.Patch <= version.Patch));
  }

  /**
   * Parst den Versions-String und gibt das Version-Objekt zurück
   *
   * @param version Versionsstring (nach semver: MAJOR.MINOR.PATCH)
   */
  private parseVersion(version: string): PxVersion {
    const v = version.split(".");

    if (v.length !== 3) {
      throw new Error("Das Format der Version ist ungültig.");
    }

    return {
      Major: parseInt(v[0], 10),
      Minor: parseInt(v[1], 10),
      Patch: parseInt(v[2], 10)
    };
  }
}
