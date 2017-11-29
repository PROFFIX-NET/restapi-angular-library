import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Notizart } from './';

/**
 * Ruft die Notizarten aus ADR/Notizart ab
 */
@Injectable()
export class NotizartService implements GettableAllServiceInterface<Notizart>, GettableByIdServiceInterface<Notizart> {

  public endpoint = "ADR/Notizart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Notizarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Notizart[]> {
    return this.httpService.get<Notizart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Notizart zurück
   * @param notizartNr Notizart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(notizartNr: string, params?: GlobalQueryParameter): Observable<Notizart> {
    return this.httpService.get<Notizart>(this.endpoint + "/" + notizartNr, params);
  }
}
