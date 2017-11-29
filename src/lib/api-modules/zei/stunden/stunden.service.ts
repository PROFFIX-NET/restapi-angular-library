import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Stunden } from './';

/**
 * Ruft die Stunden aus ZEI/Stunden ab
 */
@Injectable()
export class StundenService implements GettableAllServiceInterface<Stunden>, GettableByIdServiceInterface<Stunden> {

  public endpoint = "ZEI/Stunden";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Stunden zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Stunden[]> {
    return this.httpService.get<Stunden[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Stunde zurück
   * @param stundeNr Stunde-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(stundeNr: number, params?: GlobalQueryParameter): Observable<Stunden> {
    return this.httpService.get<Stunden>(this.endpoint + "/" + stundeNr, params);
  }
}
