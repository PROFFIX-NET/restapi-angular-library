import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxBelegart } from './px-belegart.model';

/**
 * Ruft die Belegarten aus PRO/Belegart ab
 */
@Injectable()
export class PxBelegartService implements PxGettableAllServiceInterface<PxBelegart>, PxGettableByIdServiceInterface<PxBelegart> {

  public endpoint = "PRO/Belegart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Belegarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBelegart[]> {
    return this.httpService.get<PxBelegart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Belegart zurück
   * @param belegartNr Belegart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(belegartNr: string, params?: PxGlobalQueryParameter): Observable<PxBelegart> {
    return this.httpService.get<PxBelegart>(this.endpoint + "/" + belegartNr, params);
  }
}
