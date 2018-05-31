import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxBuchungsart } from './px-buchungsart.model';

/**
 * Ruft die Buchungsarten aus FIB/Buchungsart ab
 */
@Injectable()
export class PxBuchungsartService implements PxGettableAllServiceInterface<PxBuchungsart>, PxGettableByIdServiceInterface<PxBuchungsart> {

  public endpoint = "FIB/Buchungsart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Buchungsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBuchungsart[]> {
    return this.httpService.get<PxBuchungsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Buchungsart zurück
   * @param buchungsartNr Buchungsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(buchungsartNr: string, params?: PxGlobalQueryParameter): Observable<PxBuchungsart> {
    return this.httpService.get<PxBuchungsart>(this.endpoint + "/" + buchungsartNr, params);
  }
}
