import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface } from '../../base-interfaces';
import { Einstellung } from './';

/**
 * Ruft die Einstellungen aus PRO/Einstellung ab
 */
@Injectable()
export class EinstellungService implements GettableAllServiceInterface<Einstellung> {

  public endpoint = "PRO/Einstellung";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Einstellungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Einstellung[]> {
    return this.httpService.get<Einstellung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einstellung zurück
   * @param modul Modul
   * @param section  Section
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(modul: string, section: string, params?: GlobalQueryParameter): Observable<Einstellung> {
    return this.httpService.get<Einstellung>(this.endpoint + "/" + modul + "/" + section, params);
  }
}
