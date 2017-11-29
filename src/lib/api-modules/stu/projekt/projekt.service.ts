import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Projekt } from './';

/**
 * Ruft die Projekte aus STU/Projekt ab
 */
@Injectable()
export class ProjektService implements GettableAllServiceInterface<Projekt>, GettableByIdServiceInterface<Projekt>  {

  public endpoint = "STU/Projekt";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Projekte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Projekt[]> {
    return this.httpService.get<Projekt[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Projekt zurück
   * @param projektNr Projekt-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(projektNr: string, params?: GlobalQueryParameter): Observable<Projekt> {
    return this.httpService.get<Projekt>(this.endpoint + "/" + projektNr, params);
  }
}
