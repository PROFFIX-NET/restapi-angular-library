import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxRegion } from './px-region.model';

/**
 * Ruft die Regionen aus PRO/Region ab
 */
@Injectable()
export class PxRegionService implements PxGettableAllServiceInterface<PxRegion>, PxGettableByIdServiceInterface<PxRegion> {

  public endpoint = "PRO/Region";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Regionen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxRegion[]> {
    return this.httpService.get<PxRegion[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Region zurück
   * @param regionNr Region-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(regionNr: string, params?: PxGlobalQueryParameter): Observable<PxRegion> {
    return this.httpService.get<PxRegion>(this.endpoint + "/" + regionNr, params);
  }
}
