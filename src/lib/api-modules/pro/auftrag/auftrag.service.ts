import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Auftrag } from './';

/**
 * Ruft die Aufträge aus PRO/Auftrag ab
 */
@Injectable()
export class AuftragService implements GettableAllServiceInterface<Auftrag>, GettableByIdServiceInterface<Auftrag> {

  public endpoint = "PRO/Auftrag";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Aufträge zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Auftrag[]> {
    return this.httpService.get<Auftrag[]>(this.endpoint, params);
  }

  /**
   * Gibt einne Auftrag zurück
   * @param auftragNr Auftrag-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(auftragNr: string, params?: GlobalQueryParameter): Observable<Auftrag> {
    return this.httpService.get<Auftrag>(this.endpoint + "/" + auftragNr, params);
  }
}
