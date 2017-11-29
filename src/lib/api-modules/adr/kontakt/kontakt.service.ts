import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Kontakt } from './';

/**
 * Ruft die Kontakte aus ADR/Kontakt ab
 */
@Injectable()
export class KontaktService implements GettableAllServiceInterface<Kontakt>, GettableByIdServiceInterface<Kontakt>  {

  public endpoint = "ADR/Kontakt";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Kontakte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Kontakt[]> {
    return this.httpService.get<Kontakt[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Kontakt zurück
   * @param kontaktNr Kontakt-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontaktNr: number, params?: GlobalQueryParameter): Observable<Kontakt> {
    return this.httpService.get<Kontakt>(this.endpoint + "/" + kontaktNr, params);
  }
}
