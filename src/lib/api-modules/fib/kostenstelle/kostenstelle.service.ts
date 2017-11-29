import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kostenstelle } from './';

/**
 * Ruft die Kostenstellen aus FIB/Kostenstelle ab
 */
@Injectable()
export class KostenstelleService implements GettableAllServiceInterface<Kostenstelle>, GettableByIdServiceInterface<Kostenstelle> {

  public endpoint = "FIB/Kostenstelle";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Kostenstellen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kostenstelle[]> {
    return this.httpService.get<Kostenstelle[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kostenstelle zurück
   * @param kostenstelleNr Kostenstelle-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kostenstelleNr: string, params?: GlobalQueryParameter): Observable<Kostenstelle> {
    return this.httpService.get<Kostenstelle>(this.endpoint + "/" + kostenstelleNr, params);
  }
}
