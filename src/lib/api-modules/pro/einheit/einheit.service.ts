import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Einheit } from './';

/**
 * Ruft die Einheiten aus PRO/Einheit ab
 */
@Injectable()
export class EinheitService implements GettableAllServiceInterface<Einheit>, GettableByIdServiceInterface<Einheit> {

  public endpoint = "PRO/Einheit";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Einheiten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Einheit[]> {
    return this.httpService.get<Einheit[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einheit zurück
   * @param einheitNr Einheit-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(einheitNr: string, params?: GlobalQueryParameter): Observable<Einheit> {
    return this.httpService.get<Einheit>(this.endpoint + "/" + einheitNr, params);
  }
}
