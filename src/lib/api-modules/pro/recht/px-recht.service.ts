import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxRecht } from './px-recht.model';

/**
 * Ruft die Berechtigungen aus PRO/Recht ab
 */
@Injectable()
export class PxRechtService implements PxGettableAllServiceInterface<PxRecht> {

  public endpoint = "PRO/Recht";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Berechtigungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxRecht[]> {
    return this.httpService.get<PxRecht[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Berechtigung zurück
   * @param modul Modul
   * @param form Form
   * @param menu Menu
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(modul: string, form: string, menu: string, params?: PxGlobalQueryParameter): Observable<PxRecht> {
    return this.httpService.get<PxRecht>(this.endpoint + "/" + modul + "/" + form + "/" + menu, params);
  }
}
