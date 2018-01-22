import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxZahlungsart } from './px-zahlungsart.model';

/**
 * Ruft die Zahlungsarten aus ADR/Zahlungsart ab
 */
@Injectable()
export class PxZahlungsartService implements PxGettableAllServiceInterface<PxZahlungsart>, PxGettableByIdServiceInterface<PxZahlungsart>,
  PxGettableByIdServiceInterface<PxZahlungsart>  {

  public endpoint = "ADR/Zahlungsart";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Zahlungsarten zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxZahlungsart[]> {
    return this.httpService.get<PxZahlungsart[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Zahlungsart zurück
   * @param zahlungsartNr Zahlungsart-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(zahlungsartNr: number, params?: PxGlobalQueryParameter): Observable<PxZahlungsart> {
    return this.httpService.get<PxZahlungsart>(this.endpoint + "/" + zahlungsartNr, params);
  }
}
