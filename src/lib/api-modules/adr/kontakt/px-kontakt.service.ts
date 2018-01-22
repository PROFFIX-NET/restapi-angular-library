import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxKontakt } from './px-kontakt.model';

/**
 * Ruft die Kontakte aus ADR/Kontakt ab
 */
@Injectable()
export class PxKontaktService implements PxGettableAllServiceInterface<PxKontakt>, PxGettableByIdServiceInterface<PxKontakt>  {

  public endpoint = "ADR/Kontakt";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Kontakte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKontakt[]> {
    return this.httpService.get<PxKontakt[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Kontakt zurück
   * @param kontaktNr Kontakt-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontaktNr: number, params?: PxGlobalQueryParameter): Observable<PxKontakt> {
    return this.httpService.get<PxKontakt>(this.endpoint + "/" + kontaktNr, params);
  }
}
