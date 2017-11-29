import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { SerieNummer } from './';

/**
 * Ruft die Serienummern aus LAG/Serienummer ab
 */
@Injectable()
export class SerienummerService implements GettableAllServiceInterface<SerieNummer>, GettableByIdServiceInterface<SerieNummer> {

  public endpoint = "LAG/SerieNummer";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Serienummern zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<SerieNummer[]> {
    return this.httpService.get<SerieNummer[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Serienummer zurück
   * @param serienummerNr Serienummer-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(serienummerNr: string, params?: GlobalQueryParameter): Observable<SerieNummer> {
    return this.httpService.get<SerieNummer>(this.endpoint + "/" + serienummerNr, params);
  }
}
