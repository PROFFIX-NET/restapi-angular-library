import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Lagerort } from './';

/**
 * Ruft die Lagerorte aus LAG/Lagerort ab
 */
@Injectable()
export class LagerortService implements GettableAllServiceInterface<Lagerort>, GettableByIdServiceInterface<Lagerort> {

  public endpoint = "LAG/Lagerort";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Lagerorte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Lagerort[]> {
    return this.httpService.get<Lagerort[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Lagerort zurück
   * @param lagerortNr Lagerort-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(lagerortNr: string, params?: GlobalQueryParameter): Observable<Lagerort> {
    return this.httpService.get<Lagerort>(this.endpoint + "/" + lagerortNr, params);
  }
}
