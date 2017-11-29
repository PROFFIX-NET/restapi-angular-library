import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Adressgruppe } from './';

/**
 * Ruft die Adressgruppen aus ADR/Adressgruppe ab
 */
@Injectable()
export class AdressgruppeService implements GettableAllServiceInterface<Adressgruppe>, GettableByIdServiceInterface<Adressgruppe> {

  public endpoint = "ADR/Adressgruppe";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Adressgruppen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Adressgruppe[]> {
    return this.httpService.get<Adressgruppe[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Adressgruppe zurück
   * @param adressgruppeNr Adressgruppe-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(adressgruppeNr: string, params?: GlobalQueryParameter): Observable<Adressgruppe> {
    return this.httpService.get<Adressgruppe>(this.endpoint + "/" + adressgruppeNr, params);
  }
}
