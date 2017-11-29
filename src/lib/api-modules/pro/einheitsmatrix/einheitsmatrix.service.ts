import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface } from '../../base-interfaces';
import { Einheitsmatrix } from './';

/**
 * Ruft die Einheitsmatrixen aus PRO/Einheitsmatrix ab
 */
@Injectable()
export class EinheitsmatrixService implements GettableAllServiceInterface<Einheitsmatrix> {

  public endpoint = "PRO/Einheitsmatrix";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Einheitsmatrizen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Einheitsmatrix[]> {
    return this.httpService.get<Einheitsmatrix[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einheitsmatrix zurück
   * @param einheitLager Lagereinheit-Nr
   * @param einheitRechnung Rechnungseinheit-Nr
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   * @returns {Observable<Einheitsmatrix>}
   */
  public get(einheitLager: string, einheitRechnung: string, params?: GlobalQueryParameter): Observable<Einheitsmatrix> {
    return this.httpService.get<Einheitsmatrix>(this.endpoint + "/" + einheitLager + "/" + einheitRechnung, params);
  }
}
