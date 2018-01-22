import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxPostableServiceInterface } from "../../base-interfaces/px-postable-service-interface";
import { PxPuttableServiceInterface } from "../../base-interfaces/px-puttable-service-interface";
import { PxDeletableServiceInterface } from "../../base-interfaces/px-deletable-service-interface";
import { PxBuchung } from './px-buchung.model';

/**
 * Ruft die Buchungen aus FIB/Buchung ab
 */
@Injectable()
export class PxBuchungService implements PxGettableAllServiceInterface<PxBuchung>, PxGettableByIdServiceInterface<PxBuchung>,
  PxDeletableServiceInterface<PxBuchung>, PxPuttableServiceInterface<PxBuchung>, PxPostableServiceInterface<PxBuchung> {

  public endpoint = "FIB/Buchung";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Buchungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBuchung[]> {
    return this.httpService.get<PxBuchung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Buchung zurück
   * @param buchungsNr Buchung-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(buchungsNr: number, params?: PxGlobalQueryParameter): Observable<PxBuchung> {
    return this.httpService.get<PxBuchung>(this.endpoint + "/" + buchungsNr, params);
  }

  /**
   * Legt eine neue Buchung an
   * @param buchung Buchung welche angelegt wird
   */
  public post(buchung: PxBuchung): Observable<string> {
    return this.httpService.post(this.endpoint, buchung);
  }

  /**
   * Aktualisiert eine Buchung anhand der Buchungsnummer
   * @param buchung Buchung welche aktualisiert wird
   */
  public put(buchung: PxBuchung): Observable<void> {
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
