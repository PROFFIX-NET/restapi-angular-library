import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Land } from './';

/**
 * Ruft die Länder aus PRO/Land ab
 */
@Injectable()
export class LandService implements GettableAllServiceInterface<Land>, GettableByIdServiceInterface<Land> {

  public endpoint = "PRO/Land";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Länder zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Land[]> {
    return this.httpService.get<Land[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Land zurück
   * @param landNr Land-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(landNr: string, params?: GlobalQueryParameter): Observable<Land> {
    return this.httpService.get<Land>(this.endpoint + "/" + landNr, params);
  }
}
