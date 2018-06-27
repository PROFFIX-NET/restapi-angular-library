import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxStempel } from './px-stempel.model';
import { PxMitarbeiter } from '../../pro/mitarbeiter/px-mitarbeiter.model';


/**
 * Stempelt und ruft den Stempelstatus ab
 */
@Injectable()
export class PxStempelService implements PxRestApiServiceInterface {

  public endpoint = "ZEI/Stempel";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt den Stempel-Status des eingeloggten Mitarbeiters (oder des übergebenen Mitarbeiters) zurück
   * @param mitarbeiter Mitarbeiter (oder Mitarbeiter Nummer) dessen Stempel-Status zurückgegeben wird
   */
  public getStempel(mitarbeiter?: PxMitarbeiter | number): Observable<PxStempel> {
    if (mitarbeiter) {
      return this.httpService.get<PxStempel>(this.endpoint, {
        "mitarbeiter": (typeof mitarbeiter !== "number") ? mitarbeiter.MitarbeiterNr : mitarbeiter
      });
    } else {
      return this.httpService.get<PxStempel>(this.endpoint);
    }
  }
}
