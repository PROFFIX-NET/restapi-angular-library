import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxSerieNummer } from './px-serie-nummer.model';

/**
 * Ruft die Serienummern aus LAG/Serienummer ab
 */
@Injectable()
export class PxSerieNummerService implements PxGettableAllServiceInterface<PxSerieNummer>, PxGettableByIdServiceInterface<PxSerieNummer> {

  public endpoint = "LAG/SerieNummer";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Serienummern zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxSerieNummer[]> {
    return this.httpService.get<PxSerieNummer[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Serienummer zurück
   * @param serienummerNr Serienummer-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(serienummerNr: string, params?: PxGlobalQueryParameter): Observable<PxSerieNummer> {
    return this.httpService.get<PxSerieNummer>(this.endpoint + "/" + serienummerNr, params);
  }
}
