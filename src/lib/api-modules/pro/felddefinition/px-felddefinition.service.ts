import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxFelddefinition } from './px-felddefinition.model';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';

/**
 * Ruft die Felddefinitionen aus PRO/Felddefinition ab
 */
@Injectable()
export class PxFelddefinitionService implements PxRestApiServiceInterface {

  public endpoint = "PRO/Felddefinition";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Felddefinition zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxFelddefinition[]> {
    return this.httpService.get<PxFelddefinition[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Felddefinition zurück
   *
   * @param tabellenname Tabellenname
   * @param feldname Feldname
   */
  public get(tabellenname: string, feldname?: string): Observable<PxFelddefinition[] | PxFelddefinition> {
    if (feldname) {
      return this.httpService.get<PxFelddefinition>(this.endpoint + "/" + tabellenname + "/" + feldname);
    } else {
      return this.httpService.get<PxFelddefinition[]>(this.endpoint + "/" + tabellenname);
    }
  }
}
