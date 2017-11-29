import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kostenart } from './';

/**
 * Ruft die Kostenarten aus FIB/Kostenart ab
 */
@Injectable()
export class KostenartService implements GettableAllServiceInterface<Kostenart>, GettableByIdServiceInterface<Kostenart> {

  public endpoint = "FIB/Kostenart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Kostenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kostenart[]> {
    return this.httpService.get<Kostenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kostenart zurück
   * @param kostenartNr Kostenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kostenartNr: string, params?: GlobalQueryParameter): Observable<Kostenart> {
    return this.httpService.get<Kostenart>(this.endpoint + "/" + kostenartNr, params);
  }
}
