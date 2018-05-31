import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxKontakttyp } from './px-kontakttyp.model';

/**
 * Ruft die Kontakttypen aus ADR/Kontakttyp ab
 */
@Injectable()
export class PxKontakttypService implements PxGettableAllServiceInterface<PxKontakttyp>, PxGettableByIdServiceInterface<PxKontakttyp> {

  public endpoint = "ADR/Kontakttyp";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Kontakttypen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxKontakttyp[]> {
    return this.httpService.get<PxKontakttyp[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Kontakttyp zurück
   * @param kontakttypNr Kontakttyp-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(kontakttypNr: string, params?: PxGlobalQueryParameter): Observable<PxKontakttyp> {
    return this.httpService.get<PxKontakttyp>(this.endpoint + "/" + kontakttypNr, params);
  }
}
