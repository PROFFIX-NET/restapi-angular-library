import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxStempel } from './px-stempel.model';

/**
 * Stempelt und ruft den Stempelstatus ab
 */
@Injectable()
export class PxStempelService implements PxRestApiServiceInterface {

  public endpoint = "ZEI/Stempel";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt den Stempel-Status zurück
   */
  public getStempel(): Observable<PxStempel> {
    return this.httpService.get<PxStempel>(this.endpoint);
  }
}
