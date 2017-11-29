import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Mitarbeiter } from './';

/**
 * Ruft die Mitarbeiter aus PRO/Mitarbeiter ab
 */
@Injectable()
export class MitarbeiterService implements GettableAllServiceInterface<Mitarbeiter>, GettableByIdServiceInterface<Mitarbeiter> {

  public endpoint = "PRO/Mitarbeiter";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Mitarbeiter zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Mitarbeiter[]> {
    return this.httpService.get<Mitarbeiter[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Mitarbeiter zurück
   * @param mitarbeiterNr Mitarbeiter-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(mitarbeiterNr: string, params?: GlobalQueryParameter): Observable<Mitarbeiter> {
    return this.httpService.get<Mitarbeiter>(this.endpoint + "/" + mitarbeiterNr, params);
  }
}
