import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxKontoklasse } from './px-kontoklasse.model';

/**
 * Ruft die Kontoklassen aus FIB/Kontoklasse ab
 */
@Injectable()
export class PxKontoklasseService implements PxGettableAllServiceInterface<PxKontoklasse>, PxGettableByIdServiceInterface<PxKontoklasse> {

  public endpoint = "FIB/Kontoklasse";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Kontoklassen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKontoklasse[]> {
    return this.httpService.get<PxKontoklasse[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kontoklasse zurück
   * @param kontoklasseNr Kontoklasse-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontoklasseNr: string, params?: PxGlobalQueryParameter): Observable<PxKontoklasse> {
    return this.httpService.get<PxKontoklasse>(this.endpoint + "/" + kontoklasseNr, params);
  }
}
