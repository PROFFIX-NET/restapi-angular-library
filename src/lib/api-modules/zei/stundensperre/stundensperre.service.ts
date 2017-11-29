import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../http';
import { RestApiServiceInterface } from '../../base-interfaces';
import { Stundensperre } from './';

/**
 * Ruft die Stundeninfo aus ZEI/Stundensperre ab
 */
@Injectable()
export class StundensperreService implements RestApiServiceInterface {

  public endpoint = "ZEI/Stundensperre";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt die Stundeninfo zurück
   */
  public getStundensperre(): Observable<Stundensperre> {
    return this.httpService.get<Stundensperre>(this.endpoint);
  }
}
