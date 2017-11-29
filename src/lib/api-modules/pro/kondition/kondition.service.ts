import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kondition } from './';

/**
 * Ruft die Konditionen aus PRO/Kondition ab
 */
@Injectable()
export class KonditionService implements GettableAllServiceInterface<Kondition>, GettableByIdServiceInterface<Kondition> {

  public endpoint = "PRO/Kondition";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Konditionen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kondition[]> {
    return this.httpService.get<Kondition[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kondition zurück
   * @param konditionNr Kondition-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(konditionNr: number, params?: GlobalQueryParameter): Observable<Kondition> {
    return this.httpService.get<Kondition>(this.endpoint + "/" + konditionNr, params);
  }
}
