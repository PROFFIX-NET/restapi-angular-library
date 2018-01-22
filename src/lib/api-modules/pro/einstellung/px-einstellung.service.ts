import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxEinstellung } from './px-einstellung.model';

/**
 * Ruft die Einstellungen aus PRO/Einstellung ab
 */
@Injectable()
export class PxEinstellungService implements PxGettableAllServiceInterface<PxEinstellung> {

  public endpoint = "PRO/Einstellung";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Einstellungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxEinstellung[]> {
    return this.httpService.get<PxEinstellung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Einstellung zurück
   * @param modul Modul
   * @param section  Section
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(modul: string, section: string, params?: PxGlobalQueryParameter): Observable<PxEinstellung> {
    return this.httpService.get<PxEinstellung>(this.endpoint + "/" + modul + "/" + section, params);
  }
}
