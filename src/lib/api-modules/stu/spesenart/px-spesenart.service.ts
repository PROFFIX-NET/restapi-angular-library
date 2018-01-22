import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxSpesenart } from './px-spesenart.model';

/**
 * Ruft die Spesenarten aus STU/Spesenart ab
 */
@Injectable()
export class PxSpesenartService implements PxGettableAllServiceInterface<PxSpesenart>, PxGettableByIdServiceInterface<PxSpesenart> {

  public endpoint = "STU/Spesenart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Spesenarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxSpesenart[]> {
    return this.httpService.get<PxSpesenart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Spesenart zurück
   * @param spesenartNr Spesenart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(spesenartNr: number, params?: PxGlobalQueryParameter): Observable<PxSpesenart> {
    return this.httpService.get<PxSpesenart>(this.endpoint + "/" + spesenartNr, params);
  }
}
