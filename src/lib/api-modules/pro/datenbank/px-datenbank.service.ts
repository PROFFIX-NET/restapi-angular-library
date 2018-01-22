import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxConnectionSettingsService } from '../../../connection-settings/px-connection-settings.service';
import { PxDatenbank } from './px-datenbank.model';

/**
 * Ruft Datenbanken aus /PRO/Datenbank ab
 */
@Injectable()
export class PxDatenbankService {
  public endpoint = "PRO/Datenbank";

  public constructor(
    private httpService: PxHttpService,
    private connectionSettingsService: PxConnectionSettingsService
  ) { }

  /**
   * Ruft alle Datenbanken ab
   */
  public getAll(): Observable<PxDatenbank[]> {
    return this.httpService.get<PxDatenbank[]>(this.endpoint, {
      "key": this.connectionSettingsService.current.WebservicePasswortHash
    });
  }
}
