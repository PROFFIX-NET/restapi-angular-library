import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Konto } from './';

/**
 * Ruft die Konten aus FIB/Konto ab
 */
@Injectable()
export class KontoService implements GettableAllServiceInterface<Konto>, GettableByIdServiceInterface<Konto> {

  public endpoint = "FIB/Konto";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Konten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Konto[]> {
    return this.httpService.get<Konto[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Konto zurück
   * @param kontoNr Konto-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontoNr: string, params?: GlobalQueryParameter): Observable<Konto> {
    return this.httpService.get<Konto>(this.endpoint + "/" + kontoNr, params);
  }
}
