import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxLagerort } from './px-lagerort.model';

/**
 * Ruft die Lagerorte aus LAG/Lagerort ab
 */
@Injectable()
export class PxLagerortService implements PxGettableAllServiceInterface<PxLagerort>, PxGettableByIdServiceInterface<PxLagerort> {

  public endpoint = "LAG/Lagerort";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Lagerorte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxLagerort[]> {
    return this.httpService.get<PxLagerort[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Lagerort zurück
   * @param lagerortNr Lagerort-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(lagerortNr: string, params?: PxGlobalQueryParameter): Observable<PxLagerort> {
    return this.httpService.get<PxLagerort>(this.endpoint + "/" + lagerortNr, params);
  }
}
