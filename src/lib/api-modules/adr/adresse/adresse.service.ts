import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, RequestParameter, GlobalQueryParameter } from '../../../http';
import {
  RestApiServiceInterface,
  GettableAllServiceInterface,
  GettableByIdServiceInterface,
  DeletableServiceInterface,
  PuttableServiceInterface,
  PostableServiceInterface
} from '../../base-interfaces';
import { Adresse } from "./";

/**
 * Ruft die Adressen aus ADR/Adresse ab
 */
@Injectable()
export class AdresseService implements GettableAllServiceInterface<Adresse>, GettableByIdServiceInterface<Adresse>,
  DeletableServiceInterface<Adresse>, PuttableServiceInterface<Adresse>, PostableServiceInterface<Adresse> {

  public endpoint = "ADR/Adresse";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Adressen zurück
   *
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Adresse[]> {
    return this.httpService.get<Adresse[]>(this.endpoint, params);
  }

  /**
   * Gibt die Adresse mit der id (AdressNr) zurück
   * @param adressNr AndressNr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(adressNr: number, params?: GlobalQueryParameter): Observable<Adresse> {
    return this.httpService.get<Adresse>(this.endpoint + "/" + adressNr, params);
  }

  /**
   * Aktualisiert eine Adresse anhand der Adressnummer
   *  @param adresse Andresse welche aktualisiert wird
   */
  public put(adresse: Adresse): Observable<void> {
    return this.httpService.put(this.endpoint + "/" + adresse.AdressNr, adresse);
  }

  /**
   * Legt eine neue Adresse an
   *  @param adresse Adresse welche angelegt wird
   */
  public post(adresse: Adresse): Observable<string> {
    return this.httpService.post(this.endpoint, adresse);
  }

  /**
   * Löschen eine Adresse anhand der Adressnummer
   * @param adressNr AdressNr welche abgerufen wird
   */
  public delete(adressNr: number): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + adressNr);
  }
}
