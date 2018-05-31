import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxVertreter } from './px-vertreter.model';

/**
 * Ruft die Vertreter aus PRO/Vertreter ab
 */
@Injectable()
export class PxVertreterService implements PxGettableAllServiceInterface<PxVertreter>, PxGettableByIdServiceInterface<PxVertreter> {

  public endpoint = "PRO/Vertreter";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Vertreter zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxVertreter[]> {
    return this.httpService.get<PxVertreter[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Vertreter zurück
   * @param vertreterNr Vertreter-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(vertreterNr: string, params?: PxGlobalQueryParameter): Observable<PxVertreter> {
    return this.httpService.get<PxVertreter>(this.endpoint + "/" + vertreterNr, params);
  }
}
