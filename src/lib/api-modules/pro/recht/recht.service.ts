import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface } from '../../base-interfaces';
import { Recht } from './';

/**
 * Ruft die Berechtigungen aus PRO/Recht ab
 */
@Injectable()
export class RechtService implements GettableAllServiceInterface<Recht> {

  public endpoint = "PRO/Recht";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Berechtigungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Recht[]> {
    return this.httpService.get<Recht[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Berechtigung zurück
   * @param modul Modul
   * @param form Form
   * @param menu Menu
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(modul: string, form: string, menu: string, params?: GlobalQueryParameter): Observable<Recht> {
    return this.httpService.get<Recht>(this.endpoint + "/" + modul + "/" + form + "/" + menu, params);
  }
}
