import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Region } from './';

/**
 * Ruft die Regionen aus PRO/Region ab
 */
@Injectable()
export class RegionService implements GettableAllServiceInterface<Region>, GettableByIdServiceInterface<Region> {

  public endpoint = "PRO/Region";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Regionen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Region[]> {
    return this.httpService.get<Region[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Region zurück
   * @param regionNr Region-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(regionNr: string, params?: GlobalQueryParameter): Observable<Region> {
    return this.httpService.get<Region>(this.endpoint + "/" + regionNr, params);
  }
}
