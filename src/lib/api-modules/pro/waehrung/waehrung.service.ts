import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Waehrung } from './';

/**
 * Ruft die Währungen aus PRO/Waehrung ab
 */
@Injectable()
export class WaehrungService implements GettableAllServiceInterface<Waehrung>, GettableByIdServiceInterface<Waehrung> {

  public endpoint = "PRO/Waehrung";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Währungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Waehrung[]> {
    return this.httpService.get<Waehrung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Währung zurück
   * @param waehrungNr Waehrung-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(waehrungNr: string, params?: GlobalQueryParameter): Observable<Waehrung> {
    return this.httpService.get<Waehrung>(this.endpoint + "/" + waehrungNr, params);
  }
}
