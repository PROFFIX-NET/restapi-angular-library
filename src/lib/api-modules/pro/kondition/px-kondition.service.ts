import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxKondition } from './px-kondition.model';


/**
 * Ruft die Konditionen aus PRO/Kondition ab
 */
@Injectable()
export class PxKonditionService implements PxGettableAllServiceInterface<PxKondition>, PxGettableByIdServiceInterface<PxKondition> {

  public endpoint = "PRO/Kondition";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Konditionen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKondition[]> {
    return this.httpService.get<PxKondition[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Kondition zurück
   * @param konditionNr Kondition-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(konditionNr: number, params?: PxGlobalQueryParameter): Observable<PxKondition> {
    return this.httpService.get<PxKondition>(this.endpoint + "/" + konditionNr, params);
  }
}
