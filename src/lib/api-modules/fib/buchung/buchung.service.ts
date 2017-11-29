import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import {
  RestApiServiceInterface,
  GettableAllServiceInterface,
  GettableByIdServiceInterface,
  DeletableServiceInterface,
  PuttableServiceInterface,
  PostableServiceInterface
} from '../../base-interfaces';
import { Buchung } from './';

/**
 * Ruft die Buchungen aus FIB/Buchung ab
 */
@Injectable()
export class BuchungService implements GettableAllServiceInterface<Buchung>, GettableByIdServiceInterface<Buchung>,
  DeletableServiceInterface<Buchung>, PuttableServiceInterface<Buchung>, PostableServiceInterface<Buchung> {

  public endpoint = "FIB/Buchung";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Buchungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Buchung[]> {
    return this.httpService.get<Buchung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Buchung zurück
   * @param buchungsNr Buchung-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(buchungsNr: number, params?: GlobalQueryParameter): Observable<Buchung> {
    return this.httpService.get<Buchung>(this.endpoint + "/" + buchungsNr, params);
  }

  /**
   * Legt eine neue Buchung an
   * @param buchung Buchung welche angelegt wird
   */
  public post(buchung: Buchung): Observable<string> {
    return this.httpService.post(this.endpoint, buchung);
  }

  /**
   * Aktualisiert eine Buchung anhand der Buchungsnummer
   * @param buchung Buchung welche aktualisiert wird
   */
  public put(buchung: Buchung): Observable<void> {
    return this.httpService.put(this.endpoint + "/" + buchung.BuchungNr, buchung);
  }

  /**
   * Löschen einer Buchung anhand der Buchungsnummer.
   * @param buchungsNr BuchungsNr welche gelöscht wird
   */
  public delete(buchungsNr: number): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + buchungsNr);
  }
}
