import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Positionsart } from './';

/**
 * Ruft die Positionsarten aus STU/Positionsart ab
 */
@Injectable()
export class PositionsartService implements GettableAllServiceInterface<Positionsart>, GettableByIdServiceInterface<Positionsart> {

  public endpoint = "STU/Positionsart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Positionsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Positionsart[]> {
    return this.httpService.get<Positionsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Positionsart zurück
   * @param positionsartNr Positionsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(positionsartNr: number, params?: GlobalQueryParameter): Observable<Positionsart> {
    return this.httpService.get<Positionsart>(this.endpoint + "/" + positionsartNr, params);
  }
}
