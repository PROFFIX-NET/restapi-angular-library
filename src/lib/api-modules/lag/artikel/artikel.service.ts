import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Artikel } from './';

/**
 * Ruft die Artikel aus LAG/Artikel ab
 */
@Injectable()
export class ArtikelService implements GettableAllServiceInterface<Artikel>, GettableByIdServiceInterface<Artikel> {

  public endpoint = "LAG/Artikel";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Artikel zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Artikel[]> {
    return this.httpService.get<Artikel[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Artikel zurück
   * @param artikelNr Artikel-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(artikelNr: string, params?: GlobalQueryParameter): Observable<Artikel> {
    return this.httpService.get<Artikel>(this.endpoint + "/" + artikelNr, params);
  }
}
