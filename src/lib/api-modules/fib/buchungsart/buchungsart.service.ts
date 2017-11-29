import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Buchungsart } from './';

/**
 * Ruft die Buchungsarten aus FIB/Buchungsart ab
 */
@Injectable()
export class BuchungsartService implements GettableAllServiceInterface<Buchungsart>, GettableByIdServiceInterface<Buchungsart> {

  public endpoint = "FIB/Buchungsart";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Buchungsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Buchungsart[]> {
    return this.httpService.get<Buchungsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Buchungsart zurück
   * @param buchungsartNr Buchungsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(buchungsartNr: string, params?: GlobalQueryParameter): Observable<Buchungsart> {
    return this.httpService.get<Buchungsart>(this.endpoint + "/" + buchungsartNr, params);
  }
}
