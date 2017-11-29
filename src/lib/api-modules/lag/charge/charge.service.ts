import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Charge } from './';

/**
 * Ruft die Chargen aus LAG/Charge ab
 */
@Injectable()
export class ChargeService implements GettableAllServiceInterface<Charge>, GettableByIdServiceInterface<Charge> {

  public endpoint = "LAG/Charge";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Chargen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Charge[]> {
    return this.httpService.get<Charge[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Chargen zurück
   * @param chargeNr Charge-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(chargeNr: string, params?: GlobalQueryParameter): Observable<Charge> {
    return this.httpService.get<Charge>(this.endpoint + "/" + chargeNr, params);
  }
}
