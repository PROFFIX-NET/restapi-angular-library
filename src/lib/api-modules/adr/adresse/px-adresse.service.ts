import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxPostableServiceInterface } from '../../base-interfaces/px-postable-service-interface';
import { PxPuttableServiceInterface } from '../../base-interfaces/px-puttable-service-interface';
import { PxDeletableServiceInterface } from '../../base-interfaces/px-deletable-service-interface';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';

import { PxAdresse } from './px-adresse.model';

/**
 * Ruft die Adressen aus ADR/Adresse ab
 */
@Injectable()
export class PxAdresseService implements PxGettableAllServiceInterface<PxAdresse>, PxGettableByIdServiceInterface<PxAdresse>,
  PxDeletableServiceInterface<PxAdresse>, PxPuttableServiceInterface<PxAdresse>, PxPostableServiceInterface<PxAdresse> {

  public endpoint = "ADR/Adresse";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Adressen zurück
   *
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxAdresse[]> {
    return this.httpService.get<PxAdresse[]>(this.endpoint, params);
  }

  /**
   * Gibt die Adresse mit der id (AdressNr) zurück
   * @param adressNr AndressNr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(adressNr: number, params?: PxGlobalQueryParameter): Observable<PxAdresse> {
    return this.httpService.get<PxAdresse>(this.endpoint + "/" + adressNr, params);
  }

  /**
   * Aktualisiert eine Adresse anhand der Adressnummer
   *  @param adresse Andresse welche aktualisiert wird
   */
  public put(adresse: PxAdresse): Observable<void> {
    return this.httpService.put(this.endpoint + "/" + adresse.AdressNr, adresse);
  }

  /**
   * Legt eine neue Adresse an
   *  @param adresse Adresse welche angelegt wird
   */
  public post(adresse: PxAdresse): Observable<string> {
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
