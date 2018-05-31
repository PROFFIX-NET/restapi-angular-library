import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxGettableByIdServiceInterface } from '../../base-interfaces/px-gettable-by-id-service-interface';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxHttpService } from '../../../http/px-http.service';

import { PxAdressgruppe } from './px-adressgruppe.model';


/**
 * Ruft die Adressgruppen aus ADR/Adressgruppe ab
 */
@Injectable()
export class PxAdressgruppeService implements
  PxGettableAllServiceInterface<PxAdressgruppe>,
  PxGettableByIdServiceInterface<PxAdressgruppe> {

  public endpoint = "ADR/Adressgruppe";

  constructor(private httpService: PxHttpService) { }

  /**
   * Gibt alle Adressgruppen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxAdressgruppe[]> {
    return this.httpService.get<PxAdressgruppe[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Adressgruppe zurück
   * @param adressgruppeNr Adressgruppe-Nr welche abgerufen wird
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(adressgruppeNr: string, params?: PxGlobalQueryParameter): Observable<PxAdressgruppe> {
    return this.httpService.get<PxAdressgruppe>(this.endpoint + "/" + adressgruppeNr, params);
  }
}
