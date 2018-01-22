import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxLand } from './px-land.model';

/**
 * Ruft die Länder aus PRO/Land ab
 */
@Injectable()
export class PxLandService implements PxGettableAllServiceInterface<PxLand>, PxGettableByIdServiceInterface<PxLand> {

  public endpoint = "PRO/Land";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Länder zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxLand[]> {
    return this.httpService.get<PxLand[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Land zurück
   * @param landNr Land-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(landNr: string, params?: PxGlobalQueryParameter): Observable<PxLand> {
    return this.httpService.get<PxLand>(this.endpoint + "/" + landNr, params);
  }
}
