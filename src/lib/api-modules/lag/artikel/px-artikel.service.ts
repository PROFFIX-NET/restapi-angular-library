import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxArtikel } from './px-artikel.model';

/**
 * Ruft die Artikel aus LAG/Artikel ab
 */
@Injectable()
export class PxArtikelService implements PxGettableAllServiceInterface<PxArtikel>, PxGettableByIdServiceInterface<PxArtikel> {

  public endpoint = "LAG/Artikel";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Artikel zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxArtikel[]> {
    return this.httpService.get<PxArtikel[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Artikel zurück
   * @param artikelNr Artikel-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(artikelNr: string, params?: PxGlobalQueryParameter): Observable<PxArtikel> {
    return this.httpService.get<PxArtikel>(this.endpoint + "/" + artikelNr, params);
  }
}
