import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxPostableServiceInterface } from '../../base-interfaces/px-postable-service-interface';
import { PxPuttableServiceInterface } from '../../base-interfaces/px-puttable-service-interface';
import { PxDeletableServiceInterface } from '../../base-interfaces/px-deletable-service-interface';
import { PxRapport } from './px-rapport.model';

/**
 * Ruft die Rapporte aus STU/Rapport ab
 */
@Injectable()
export class PxRapportService implements PxGettableAllServiceInterface<PxRapport>, PxGettableByIdServiceInterface<PxRapport>,
  PxPostableServiceInterface<PxRapport>, PxPuttableServiceInterface<PxRapport>, PxDeletableServiceInterface<PxRapport>  {

  public endpoint = "STU/Rapport";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Rapporte zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxRapport[]> {
    return this.httpService.get<PxRapport[]>(this.endpoint, params);
  }

  /**
   * Gibt einen Rapport zurück
   * @param rapportNr Rapport-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(rapportNr: number, params?: PxGlobalQueryParameter): Observable<PxRapport> {
    return this.httpService.get<PxRapport>(this.endpoint + "/" + rapportNr, params);
  }

  /**
   * Legt einen neuen Rapport an
   * @param rapport Rapport welcher angelegt wird
   */
  public post(rapport: PxRapport): Observable<string> {
    return this.httpService.post(this.endpoint, rapport);
  }

  /**
   * Aktualisiert einen Rapport anhand der Rapport-Nr
   * @param rapport Rapport welcher aktualisiert wird
   */
  public put(rapport: PxRapport): Observable<void> {
    return this.httpService.put(this.endpoint + "/" + rapport.RapportNr, rapport);
  }

  /**
   * Löschen eines Rapports anhand der Rapportnummer
   * @param rapportNr Rapport-Nr welche gelöscht wird
   */
  public delete(rapportNr: number): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + rapportNr);
  }
}
