import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxStundensperre } from './px-stundensperre.model';

/**
 * Ruft die Stundeninfo aus ZEI/Stundensperre ab
 */
@Injectable()
export class StundensperreService implements PxRestApiServiceInterface {

  public endpoint = "ZEI/Stundensperre";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt die Stundeninfo zurück
   */
  public getStundensperre(): Observable<PxStundensperre> {
    return this.httpService.get<PxStundensperre>(this.endpoint);
  }
}
