import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxKostenart } from './px-kostenart.model';

/**
 * Ruft die Kostenarten aus FIB/Kostenart ab
 */
@Injectable()
export class PxKostenartService implements PxGettableAllServiceInterface<PxKostenart>, PxGettableByIdServiceInterface<PxKostenart> {

  public endpoint = "FIB/Kostenart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Kostenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKostenart[]> {
    return this.httpService.get<PxKostenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kostenart zurück
   * @param kostenartNr Kostenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kostenartNr: string, params?: PxGlobalQueryParameter): Observable<PxKostenart> {
    return this.httpService.get<PxKostenart>(this.endpoint + "/" + kostenartNr, params);
  }
}
