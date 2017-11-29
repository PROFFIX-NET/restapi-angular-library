import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Notiz } from './';

/**
 * Ruft die Notizen aus ADR/Notiz ab
 */
@Injectable()
export class NotizService implements GettableAllServiceInterface<Notiz>, GettableByIdServiceInterface<Notiz> {

  public endpoint = "ADR/Notiz";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Notizen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Notiz[]> {
    return this.httpService.get<Notiz[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Notiz zurück
   * @param notizNr  Notiz-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(notizNr: number, params?: GlobalQueryParameter): Observable<Notiz> {
    return this.httpService.get<Notiz>(this.endpoint + "/" + notizNr, params);
  }
}
