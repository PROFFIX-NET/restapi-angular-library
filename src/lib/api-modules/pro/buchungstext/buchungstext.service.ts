import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface } from '../../base-interfaces';
import { Buchungstext } from './';

/**
 * Ruft die Buchungstexte aus PRO/Buchungstext ab
 */
@Injectable()
export class BuchungstextService implements GettableAllServiceInterface<Buchungstext> {

  public endpoint = "PRO/Buchungstext";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Buchungstexte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Buchungstext[]> {
    return this.httpService.get<Buchungstext[]>(this.endpoint, params);
  }
}
