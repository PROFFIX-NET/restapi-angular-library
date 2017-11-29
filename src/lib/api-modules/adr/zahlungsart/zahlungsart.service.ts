import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Zahlungsart } from './';

/**
 * Ruft die Zahlungsarten aus ADR/Zahlungsart ab
 */
@Injectable()
export class ZahlungsartService implements GettableAllServiceInterface<Zahlungsart>, GettableByIdServiceInterface<Zahlungsart>,
  GettableByIdServiceInterface<Zahlungsart>  {

  public endpoint = "ADR/Zahlungsart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Zahlungsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Zahlungsart[]> {
    return this.httpService.get<Zahlungsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Zahlungsart zurück
   * @param zahlungsartNr Zahlungsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(zahlungsartNr: number, params?: GlobalQueryParameter): Observable<Zahlungsart> {
    return this.httpService.get<Zahlungsart>(this.endpoint + "/" + zahlungsartNr, params);
  }
}
