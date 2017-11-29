import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService, GlobalQueryParameter } from '../../../http';
import { GettableAllServiceInterface, GettableByIdServiceInterface } from '../../base-interfaces';
import { Bank } from './';

/**
 * Ruft die Banken aus PRO/Bank ab
 */
@Injectable()
export class BankService implements GettableAllServiceInterface<Bank>, GettableByIdServiceInterface<Bank> {

  public endpoint = "PRO/Bank";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt alle Banken zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: GlobalQueryParameter): Observable<Bank[]> {
    return this.httpService.get<Bank[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Bank zurück
   * @param bankNr Bank-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(bankNr: number, params?: GlobalQueryParameter): Observable<Bank> {
    return this.httpService.get<Bank>(this.endpoint + "/" + bankNr, params);
  }
}
