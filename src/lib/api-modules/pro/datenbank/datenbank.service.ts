import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../http';
import { ConnectionSettingsService } from '../../../connection-settings';
import { Datenbank } from './';

/**
 * Ruft Datenbanken aus /PRO/Datenbank ab
 */
@Injectable()
export class DatenbankService {
  public endpoint = "PRO/Datenbank";

  public constructor(
    private httpService: HttpService,
    private connectionSettingsService: ConnectionSettingsService
  ) { }

  /**
   * Ruft alle Datenbanken ab
   */
  public getAll(): Observable<Datenbank[]> {
    return this.httpService.get<Datenbank[]>(this.endpoint, {
      "key": this.connectionSettingsService.current.WebservicePasswortHash
    });
  }
}
