import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxCharge } from './px-charge.model';

/**
 * Ruft die Chargen aus LAG/Charge ab
 */
@Injectable()
export class PxChargeService implements PxGettableAllServiceInterface<PxCharge>, PxGettableByIdServiceInterface<PxCharge> {

  public endpoint = "LAG/Charge";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Chargen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxCharge[]> {
    return this.httpService.get<PxCharge[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Chargen zurück
   * @param chargeNr Charge-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(chargeNr: string, params?: PxGlobalQueryParameter): Observable<PxCharge> {
    return this.httpService.get<PxCharge>(this.endpoint + "/" + chargeNr, params);
  }
}
