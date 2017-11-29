import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { RestApiServiceInterface, GettableAllServiceInterface } from '../../base-interfaces';
import { Felddefinition } from './';

/**
 * Ruft die Felddefinitionen aus PRO/Felddefinition ab
 */
@Injectable()
export class FelddefinitionService implements RestApiServiceInterface {

  public endpoint = "PRO/Felddefinition";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Felddefinition zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Felddefinition[]> {
    return this.httpService.get<Felddefinition[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Felddefinition zurück
   *
   * @param tabellenname Tabellenname
   * @param feldname Feldname
   */
  public get(tabellenname: string, feldname?: string): Observable<Felddefinition[] | Felddefinition> {
    if (feldname) {
      return this.httpService.get<Felddefinition>(this.endpoint + "/" + tabellenname + "/" + feldname);
    } else {
      return this.httpService.get<Felddefinition[]>(this.endpoint + "/" + tabellenname);
    }
  }
}
