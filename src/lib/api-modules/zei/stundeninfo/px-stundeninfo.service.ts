import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxStundeninfo } from './px-stundeninfo.model';

/**
 * Ruft die Stundeninfo aus ZEI/Stundeninfo ab
 */
@Injectable()
export class PxStundeninfoService implements PxRestApiServiceInterface {

  public endpoint = "ZEI/Stundeninfo";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt die Stundeninfo zurück
   */
  public getStundeninfo(): Observable<PxStundeninfo> {
    return this.httpService.get<PxStundeninfo>(this.endpoint);
  }
}
