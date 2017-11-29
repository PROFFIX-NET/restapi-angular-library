import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Vertreter } from './';

/**
 * Ruft die Vertreter aus PRO/Vertreter ab
 */
@Injectable()
export class VertreterService implements GettableAllServiceInterface<Vertreter>, GettableByIdServiceInterface<Vertreter> {

  public endpoint = "PRO/Vertreter";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Vertreter zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Vertreter[]> {
    return this.httpService.get<Vertreter[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Vertreter zurück
   * @param vertreterNr Vertreter-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(vertreterNr: string, params?: GlobalQueryParameter): Observable<Vertreter> {
    return this.httpService.get<Vertreter>(this.endpoint + "/" + vertreterNr, params);
  }
}
