import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Steuercode } from './';

/**
 * Ruft die Steuercodes aus PRO/Steuercode ab
 */
@Injectable()
export class SteuercodeService implements GettableAllServiceInterface<Steuercode>, GettableByIdServiceInterface<Steuercode> {

  public endpoint = "PRO/Steuercode";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Steuercodes zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Steuercode[]> {
    return this.httpService.get<Steuercode[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Steuercode zurück
   * @param steuercodeNr Steuercode-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(steuercodeNr: number, params?: GlobalQueryParameter): Observable<Steuercode> {
    return this.httpService.get<Steuercode>(this.endpoint + "/" + steuercodeNr, params);
  }
}
