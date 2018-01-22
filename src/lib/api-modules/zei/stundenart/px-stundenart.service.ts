import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxStundenart } from './px-stundenart.model';

/**
 * Ruft die Stundenarten aus ZEI/Stundenart ab
 */
@Injectable()
export class PxStundenartService implements PxGettableAllServiceInterface<PxStundenart>, PxGettableByIdServiceInterface<PxStundenart> {

  public endpoint = "ZEI/Stundenart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Stundenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxStundenart[]> {
    return this.httpService.get<PxStundenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Stundenart zurück
   * @param stundenartNr Stundenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(stundenartNr: string, params?: PxGlobalQueryParameter): Observable<PxStundenart> {
    return this.httpService.get<PxStundenart>(this.endpoint + "/" + stundenartNr, params);
  }
}
