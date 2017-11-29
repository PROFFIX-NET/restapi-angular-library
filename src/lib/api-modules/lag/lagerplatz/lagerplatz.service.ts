import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Lagerplatz } from './';

/**
 * Ruft die Lagerplätze aus LAG/Lagerplatz ab
 */
@Injectable()
export class LagerplatzService implements GettableAllServiceInterface<Lagerplatz>, GettableByIdServiceInterface<Lagerplatz> {

  public endpoint = "LAG/Lagerplatz";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Lagerplätze zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Lagerplatz[]> {
    return this.httpService.get<Lagerplatz[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Lagerplatz zurück
   * @param lagerplatzNr Lagerplatz-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(lagerplatzNr: string, params?: GlobalQueryParameter): Observable<Lagerplatz> {
    return this.httpService.get<Lagerplatz>(this.endpoint + "/" + lagerplatzNr, params);
  }
}
