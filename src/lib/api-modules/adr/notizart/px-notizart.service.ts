import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxNotizart } from './px-notizart.model';

/**
 * Ruft die Notizarten aus ADR/Notizart ab
 */
@Injectable()
export class PxNotizartService implements PxGettableAllServiceInterface<PxNotizart>, PxGettableByIdServiceInterface<PxNotizart> {

  public endpoint = "ADR/Notizart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Notizarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxNotizart[]> {
    return this.httpService.get<PxNotizart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Notizart zurück
   * @param notizartNr Notizart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(notizartNr: string, params?: PxGlobalQueryParameter): Observable<PxNotizart> {
    return this.httpService.get<PxNotizart>(this.endpoint + "/" + notizartNr, params);
  }
}
