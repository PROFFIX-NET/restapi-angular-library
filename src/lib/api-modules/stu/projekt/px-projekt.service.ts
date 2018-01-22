import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxProjekt } from './px-projekt.model';

/**
 * Ruft die Projekte aus STU/Projekt ab
 */
@Injectable()
export class PxProjektService implements PxGettableAllServiceInterface<PxProjekt>, PxGettableByIdServiceInterface<PxProjekt>  {

  public endpoint = "STU/Projekt";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Projekte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxProjekt[]> {
    return this.httpService.get<PxProjekt[]>(this.endpoint, params);
  }

  /**
   * Gibt ein Projekt zurück
   * @param projektNr Projekt-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(projektNr: string, params?: PxGlobalQueryParameter): Observable<PxProjekt> {
    return this.httpService.get<PxProjekt>(this.endpoint + "/" + projektNr, params);
  }
}
