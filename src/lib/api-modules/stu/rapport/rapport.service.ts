import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import {
  GettableAllServiceInterface,
  GettableByIdServiceInterface,
  PostableServiceInterface,
  PuttableServiceInterface,
  DeletableServiceInterface
} from '../../base-interfaces';
import { Rapport } from './';

/**
 * Ruft die Rapporte aus STU/Rapport ab
 */
@Injectable()
export class RapportService implements GettableAllServiceInterface<Rapport>, GettableByIdServiceInterface<Rapport>,
  PostableServiceInterface<Rapport>, PuttableServiceInterface<Rapport>, DeletableServiceInterface<Rapport>  {

  public endpoint = "STU/Rapport";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Rapporte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Rapport[]> {
    return this.httpService.get<Rapport[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Rapport zurück
   * @param rapportNr Rapport-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(rapportNr: number, params?: GlobalQueryParameter): Observable<Rapport> {
    return this.httpService.get<Rapport>(this.endpoint + "/" + rapportNr, params);
  }

  /**
   * Legt einen neuen Rapport an
   * @param rapport Rapport welcher angelegt wird
   */
  public post(rapport: Rapport): Observable<string> {
    return this.httpService.post(this.endpoint, rapport);
  }

  /**
   * Aktualisiert einen Rapport anhand der Rapport-Nr
   * @param rapport Rapport welcher aktualisiert wird
   */
  public put(rapport: Rapport): Observable<void> {
    return this.httpService.put(this.endpoint + "/" + rapport.RapportNr, rapport);
  }

  /**
   * Löschen eines Rapports anhand der Rapportnummer
   * @param rapportNr Rapport-Nr welche gelöscht wird
   */
  public delete(rapportNr: number): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + rapportNr);
  }
}
