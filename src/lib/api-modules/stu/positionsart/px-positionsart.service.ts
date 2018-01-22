import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxPositionsart } from './px-positionsart.model';

/**
 * Ruft die Positionsarten aus STU/Positionsart ab
 */
@Injectable()
export class PxPositionsartService implements
  PxGettableAllServiceInterface<PxPositionsart>,
  PxGettableByIdServiceInterface<PxPositionsart> {

  public endpoint = "STU/Positionsart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Positionsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxPositionsart[]> {
    return this.httpService.get<PxPositionsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Positionsart zurück
   * @param positionsartNr Positionsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(positionsartNr: number, params?: PxGlobalQueryParameter): Observable<PxPositionsart> {
    return this.httpService.get<PxPositionsart>(this.endpoint + "/" + positionsartNr, params);
  }
}
