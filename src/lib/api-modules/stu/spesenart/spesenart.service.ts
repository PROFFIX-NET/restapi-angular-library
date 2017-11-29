import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Spesenart } from './';

/**
 * Ruft die Spesenarten aus STU/Spesenart ab
 */
@Injectable()
export class SpesenartService implements GettableAllServiceInterface<Spesenart>, GettableByIdServiceInterface<Spesenart> {

  public endpoint = "STU/Spesenart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Spesenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Spesenart[]> {
    return this.httpService.get<Spesenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Spesenart zurück
   * @param spesenartNr Spesenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(spesenartNr: number, params?: GlobalQueryParameter): Observable<Spesenart> {
    return this.httpService.get<Spesenart>(this.endpoint + "/" + spesenartNr, params);
  }
}
