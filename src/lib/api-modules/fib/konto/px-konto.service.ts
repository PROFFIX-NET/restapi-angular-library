import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxKonto } from './px-konto.model';
import { PxKontoSaldo } from './px-konto-saldo.model';

/**
 * Ruft die Konten aus FIB/Konto ab
 */
@Injectable()
export class PxKontoService implements PxGettableAllServiceInterface<PxKonto>, PxGettableByIdServiceInterface<PxKonto> {

  public endpoint = "FIB/Konto";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Konten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKonto[]> {
    return this.httpService.get<PxKonto[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Konto zurück
   * @param kontoNr Konto-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontoNr: string, params?: PxGlobalQueryParameter): Observable<PxKonto> {
    return this.httpService.get<PxKonto>(this.endpoint + "/" + kontoNr, params);
  }

  /**
   * Gibt ein Konto zurück
   * @param kontoNr Konto-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getSaldo(kontoNr: string, datum: string = null ): Observable<PxKontoSaldo> {
    return this.httpService.get<PxKontoSaldo>(this.endpoint + "/" + kontoNr + "/Saldo", { datum: datum});
  }
}
