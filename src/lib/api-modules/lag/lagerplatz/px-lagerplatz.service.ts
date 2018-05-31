import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxLagerplatz } from './px-lagerplatz.model';

/**
 * Ruft die Lagerplätze aus LAG/Lagerplatz ab
 */
@Injectable()
export class PxLagerplatzService implements PxGettableAllServiceInterface<PxLagerplatz>, PxGettableByIdServiceInterface<PxLagerplatz> {

  public endpoint = "LAG/Lagerplatz";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Lagerplätze zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxLagerplatz[]> {
    return this.httpService.get<PxLagerplatz[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Lagerplatz zurück
   * @param lagerplatzNr Lagerplatz-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(lagerplatzNr: string, params?: PxGlobalQueryParameter): Observable<PxLagerplatz> {
    return this.httpService.get<PxLagerplatz>(this.endpoint + "/" + lagerplatzNr, params);
  }
}
