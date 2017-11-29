import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { HttpService } from '../../../http';
import { RestApiServiceInterface } from '../../base-interfaces';
import { Info, Version } from './';
import { ConnectionSettingsService } from '../../../connection-settings';
import { Configuration } from '../../../configuration';

/**
 * Ruft Informationen über den Webservice über den Endpunkt PRO/Info
 */
@Injectable()
export class InfoService implements RestApiServiceInterface {

  public endpoint = "PRO/Info";

  constructor(
    private httpService: HttpService,
    private connectionSettingsService: ConnectionSettingsService,
    private configuration: Configuration
  ) { }

  /**
   * Ruft Informationen zum Webservice ab
   *
   * @returns {Observable<Info>}
   */
  public getInfo(): Observable<Info> {
    return this.httpService.get<Info>(this.endpoint, {
      "key": this.connectionSettingsService.current.WebservicePasswortHash
    });
  }

  /**
   * Prüft ob die in der Konfiguration angegebene Version mit dem Webservice kompatibel ist
   */
  public isAppCompatible(): Observable<boolean> {
    return this.getInfo().map((info: Info) => this.isVersionCompatible(this.parseVersion(info.Version)));
  }

  /**
   * Prüft ob eine Version mit der in der Configuration hinterlegtn Version kompatibel ist.
   * Prüfkriterien: Major muss gleich sein, Minor muss gleich oder grösser sein, Patch muss grösser sein, wenn Minor gleich ist
   *
   * @param version Version zum überprüften
   */
  private isVersionCompatible(version: Version): boolean {
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
  private parseVersion(version: string): Version {
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
