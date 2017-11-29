import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Belegart } from './';

/**
 * Ruft die Belegarten aus PRO/Belegart ab
 */
@Injectable()
export class BelegartService implements GettableAllServiceInterface<Belegart>, GettableByIdServiceInterface<Belegart> {

  public endpoint = "PRO/Belegart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Belegarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Belegart[]> {
    return this.httpService.get<Belegart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Belegart zurück
   * @param belegartNr Belegart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(belegartNr: string, params?: GlobalQueryParameter): Observable<Belegart> {
    return this.httpService.get<Belegart>(this.endpoint + "/" + belegartNr, params);
  }
}
