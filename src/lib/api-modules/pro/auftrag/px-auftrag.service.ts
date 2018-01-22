import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxAuftrag } from './px-auftrag.model';

/**
 * Ruft die Aufträge aus PRO/Auftrag ab
 */
@Injectable()
export class PxAuftragService implements PxGettableAllServiceInterface<PxAuftrag>, PxGettableByIdServiceInterface<PxAuftrag> {

  public endpoint = "PRO/Auftrag";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Aufträge zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxAuftrag[]> {
    return this.httpService.get<PxAuftrag[]>(this.endpoint, params);
  }

  /**
   * Gibt einne Auftrag zurück
   * @param auftragNr Auftrag-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(auftragNr: string, params?: PxGlobalQueryParameter): Observable<PxAuftrag> {
    return this.httpService.get<PxAuftrag>(this.endpoint + "/" + auftragNr, params);
  }
}
