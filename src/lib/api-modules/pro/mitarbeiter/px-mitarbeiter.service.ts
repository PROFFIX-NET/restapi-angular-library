import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxMitarbeiter } from './px-mitarbeiter.model';

/**
 * Ruft die Mitarbeiter aus PRO/Mitarbeiter ab
 */
@Injectable()
export class PxMitarbeiterService implements PxGettableAllServiceInterface<PxMitarbeiter>, PxGettableByIdServiceInterface<PxMitarbeiter> {

  public endpoint = "PRO/Mitarbeiter";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Mitarbeiter zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxMitarbeiter[]> {
    return this.httpService.get<PxMitarbeiter[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Mitarbeiter zurück
   * @param mitarbeiterNr Mitarbeiter-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(mitarbeiterNr: number, params?: PxGlobalQueryParameter): Observable<PxMitarbeiter> {
    return this.httpService.get<PxMitarbeiter>(this.endpoint + "/" + mitarbeiterNr, params);
  }
}
