import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../http';
import { RestApiServiceInterface } from '../../base-interfaces';
import { Stundeninfo } from './';

/**
 * Ruft die Stundeninfo aus ZEI/Stundeninfo ab
 */
@Injectable()
export class StundeninfoService implements RestApiServiceInterface {

  public endpoint = "ZEI/Stundeninfo";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt die Stundeninfo zurück
   */
  public getStundeninfo(): Observable<Stundeninfo> {
    return this.httpService.get<Stundeninfo>(this.endpoint);
  }
}
