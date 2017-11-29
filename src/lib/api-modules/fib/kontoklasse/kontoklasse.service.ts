import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kontoklasse } from './';

/**
 * Ruft die Kontoklassen aus FIB/Kontoklasse ab
 */
@Injectable()
export class KontoklasseService implements GettableAllServiceInterface<Kontoklasse>, GettableByIdServiceInterface<Kontoklasse> {

  public endpoint = "FIB/Kontoklasse";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Kontoklassen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kontoklasse[]> {
    return this.httpService.get<Kontoklasse[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kontoklasse zurück
   * @param kontoklasseNr Kontoklasse-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontoklasseNr: string, params?: GlobalQueryParameter): Observable<Kontoklasse> {
    return this.httpService.get<Kontoklasse>(this.endpoint + "/" + kontoklasseNr, params);
  }
}
