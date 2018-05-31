import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxWaehrung } from './px-waehrung.model';
import { map } from 'rxjs/operators';

/**
 * Ruft die Währungen aus PRO/Waehrung ab
 */
@Injectable()
export class PxWaehrungService implements PxGettableAllServiceInterface<PxWaehrung>, PxGettableByIdServiceInterface<PxWaehrung> {

  public endpoint = "PRO/Waehrung";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Währungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxWaehrung[]> {
    return this.httpService.get<PxWaehrung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Währung zurück
   * @param waehrungNr Waehrung-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(waehrungNr: string, params?: PxGlobalQueryParameter): Observable<PxWaehrung> {
    return this.httpService.get<PxWaehrung>(this.endpoint + "/" + waehrungNr, params);
  }

  /**
   * Startet die Kursaktualisierung.
   */
  public postKurseAktualisieren(): Observable<void> {
    return this.httpService.post(this.endpoint + "/kurseaktualisieren", null).pipe(map(x => undefined));
  }
}
