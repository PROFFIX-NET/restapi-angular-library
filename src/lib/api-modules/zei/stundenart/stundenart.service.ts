import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Stundenart } from './';

/**
 * Ruft die Stundenarten aus ZEI/Stundenart ab
 */
@Injectable()
export class StundenartService implements GettableAllServiceInterface<Stundenart>, GettableByIdServiceInterface<Stundenart> {

  public endpoint = "ZEI/Stundenart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Stundenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Stundenart[]> {
    return this.httpService.get<Stundenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Stundenart zurück
   * @param stundenartNr Stundenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(stundenartNr: string, params?: GlobalQueryParameter): Observable<Stundenart> {
    return this.httpService.get<Stundenart>(this.endpoint + "/" + stundenartNr, params);
  }
}
