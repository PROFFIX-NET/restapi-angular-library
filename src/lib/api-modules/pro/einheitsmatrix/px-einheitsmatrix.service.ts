import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxEinheitsmatrix } from './px-einheitsmatrix.model';

/**
 * Ruft die Einheitsmatrixen aus PRO/Einheitsmatrix ab
 */
@Injectable()
export class PxEinheitsmatrixService implements PxGettableAllServiceInterface<PxEinheitsmatrix> {

  public endpoint = "PRO/Einheitsmatrix";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Einheitsmatrizen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxEinheitsmatrix[]> {
    return this.httpService.get<PxEinheitsmatrix[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einheitsmatrix zurück
   * @param einheitLager Lagereinheit-Nr
   * @param einheitRechnung Rechnungseinheit-Nr
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(einheitLager: string, einheitRechnung: string, params?: PxGlobalQueryParameter): Observable<PxEinheitsmatrix> {
    return this.httpService.get<PxEinheitsmatrix>(this.endpoint + "/" + einheitLager + "/" + einheitRechnung, params);
  }
}
