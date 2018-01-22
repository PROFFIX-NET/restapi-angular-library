import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxSteuercode } from './px-steuercode.model';

/**
 * Ruft die Steuercodes aus PRO/Steuercode ab
 */
@Injectable()
export class PxSteuercodeService implements PxGettableAllServiceInterface<PxSteuercode>, PxGettableByIdServiceInterface<PxSteuercode> {

  public endpoint = "PRO/Steuercode";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Steuercodes zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxSteuercode[]> {
    return this.httpService.get<PxSteuercode[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Steuercode zurück
   * @param steuercodeNr Steuercode-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(steuercodeNr: number, params?: PxGlobalQueryParameter): Observable<PxSteuercode> {
    return this.httpService.get<PxSteuercode>(this.endpoint + "/" + steuercodeNr, params);
  }
}
