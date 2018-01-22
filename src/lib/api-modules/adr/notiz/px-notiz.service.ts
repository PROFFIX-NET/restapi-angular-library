import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxNotiz } from './px-notiz.model';

/**
 * Ruft die Notizen aus ADR/Notiz ab
 */
@Injectable()
export class PxNotizService implements PxGettableAllServiceInterface<PxNotiz>, PxGettableByIdServiceInterface<PxNotiz> {

  public endpoint = "ADR/Notiz";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Notizen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxNotiz[]> {
    return this.httpService.get<PxNotiz[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Notiz zurück
   * @param notizNr  Notiz-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(notizNr: number, params?: PxGlobalQueryParameter): Observable<PxNotiz> {
    return this.httpService.get<PxNotiz>(this.endpoint + "/" + notizNr, params);
  }
}
