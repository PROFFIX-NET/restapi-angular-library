import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxBank } from './px-bank.model';

/**
 * Ruft die Banken aus PRO/Bank ab
 */
@Injectable()
export class PxBankService implements PxGettableAllServiceInterface<PxBank>, PxGettableByIdServiceInterface<PxBank> {

  public endpoint = "PRO/Bank";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Banken zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBank[]> {
    return this.httpService.get<PxBank[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Bank zurück
   * @param bankNr Bank-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(bankNr: number, params?: PxGlobalQueryParameter): Observable<PxBank> {
    return this.httpService.get<PxBank>(this.endpoint + "/" + bankNr, params);
  }
}
