import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kontakttyp } from './';

/**
 * Ruft die Kontakttypen aus ADR/Kontakttyp ab
 */
@Injectable()
export class KontakttypService implements GettableAllServiceInterface<Kontakttyp>, GettableByIdServiceInterface<Kontakttyp> {

  public endpoint = "ADR/Kontakttyp";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Kontakttypen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kontakttyp[]> {
    return this.httpService.get<Kontakttyp[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Kontakttyp zurück
   * @param kontakttypNr Kontakttyp-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontakttypNr: string, params?: GlobalQueryParameter): Observable<Kontakttyp> {
    return this.httpService.get<Kontakttyp>(this.endpoint + "/" + kontakttypNr, params);
  }
}
