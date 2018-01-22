import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxStunden } from './px-stunden.model';

/**
 * Ruft die Stunden aus ZEI/Stunden ab
 */
@Injectable()
export class PxStundenService implements PxGettableAllServiceInterface<PxStunden>, PxGettableByIdServiceInterface<PxStunden> {

  public endpoint = "ZEI/Stunden";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Stunden zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxStunden[]> {
    return this.httpService.get<PxStunden[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Stunde zurück
   * @param stundeNr Stunde-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(stundeNr: number, params?: PxGlobalQueryParameter): Observable<PxStunden> {
    return this.httpService.get<PxStunden>(this.endpoint + "/" + stundeNr, params);
  }
}
