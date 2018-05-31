import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxBuchungstext } from './px-buchungstext.model';

/**
 * Ruft die Buchungstexte aus PRO/Buchungstext ab
 */
@Injectable()
export class PxBuchungstextService implements PxGettableAllServiceInterface<PxBuchungstext> {

  public endpoint = "PRO/Buchungstext";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Buchungstexte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBuchungstext[]> {
    return this.httpService.get<PxBuchungstext[]>(this.endpoint, params);
  }
}
