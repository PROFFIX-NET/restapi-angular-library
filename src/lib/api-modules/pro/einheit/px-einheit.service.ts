import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxEinheit } from './px-einheit.model';

/**
 * Ruft die Einheiten aus PRO/Einheit ab
 */
@Injectable()
export class PxEinheitService implements PxGettableAllServiceInterface<PxEinheit>, PxGettableByIdServiceInterface<PxEinheit> {

  public endpoint = "PRO/Einheit";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Einheiten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxEinheit[]> {
    return this.httpService.get<PxEinheit[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einheit zurück
   * @param einheitNr Einheit-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(einheitNr: string, params?: PxGlobalQueryParameter): Observable<PxEinheit> {
    return this.httpService.get<PxEinheit>(this.endpoint + "/" + einheitNr, params);
  }
}
