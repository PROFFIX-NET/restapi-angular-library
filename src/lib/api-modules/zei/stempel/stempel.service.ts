import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from '../../../http';
import { RestApiServiceInterface } from '../../base-interfaces';
import { Stempel } from './';

/**
 * Stempelt und ruft den Stempelstatus ab
 */
@Injectable()
export class StempelService implements RestApiServiceInterface {

  public endpoint = "ZEI/Stempel";

  constructor(private httpService: HttpService) { }

  /**
   * Gibt den Stempel-Status zurück
   */
  public getStempel(): Observable<Stempel> {
    return this.httpService.get<Stempel>(this.endpoint);
  }
}
