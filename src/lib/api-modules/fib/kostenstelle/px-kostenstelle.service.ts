import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxKostenstelle } from './px-kostenstelle.model';

/**
 * Ruft die Kostenstellen aus FIB/Kostenstelle ab
 */
@Injectable()
export class PxKostenstelleService implements
  PxGettableAllServiceInterface<PxKostenstelle>,
  PxGettableByIdServiceInterface<PxKostenstelle> {

  public endpoint = "FIB/Kostenstelle";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Kostenstellen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKostenstelle[]> {
    return this.httpService.get<PxKostenstelle[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kostenstelle zurück
   * @param kostenstelleNr Kostenstelle-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kostenstelleNr: string, params?: PxGlobalQueryParameter): Observable<PxKostenstelle> {
    return this.httpService.get<PxKostenstelle>(this.endpoint + "/" + kostenstelleNr, params);
  }
}
