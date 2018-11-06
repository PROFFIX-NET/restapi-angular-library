import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxBenutzerEinstellung } from './px-benutzer-einstellung.model';
import { PxPuttableServiceInterface } from '../../base-interfaces/px-puttable-service-interface';
import { PxPostableServiceInterface } from '../../base-interfaces/px-postable-service-interface';
import { PxDeletableServiceInterface } from '../../base-interfaces/px-deletable-service-interface';
import { PxConfiguration } from '../../../configuration/px-configuration';


/**
 * Ruft die Einstellungen aus PRO/Einstellung ab
 */
@Injectable()
export class PxBenutzerEinstellungService implements PxGettableAllServiceInterface<PxBenutzerEinstellung>,
  PxPuttableServiceInterface<PxBenutzerEinstellung>, PxPostableServiceInterface<PxBenutzerEinstellung>,
  PxDeletableServiceInterface<PxBenutzerEinstellung>, OnDestroy {

  public endpoint = "PRO/Benutzereinstellung";

  private loginSubscription: Subscription;

  constructor(private httpService: PxHttpService, private configuration: PxConfiguration) {
  }

  /**
   * Wird für das Login unsubscribe benötigt.
   */
  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  /**
   * Gibt alle Benutzer Einstellungen zurück
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public getAll(params?: PxGlobalQueryParameter): Observable<PxBenutzerEinstellung[]> {
      this.updateParams(params);
      return this.httpService.get<PxBenutzerEinstellung[]>(this.endpoint, params);
  }

  /**
   * Gibt eine Benutzer Einstellung zurück
   * @param schluessel eindeuter Key
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(schluessel: string, params?: PxGlobalQueryParameter): Observable<PxBenutzerEinstellung> {
      this.updateParams(params);
      return this.httpService.get<PxBenutzerEinstellung>(this.endpoint + "/" + this.getCombinedKey(schluessel), params);
  }

  /**
   * Legt eine neue Benutzer Einstellung an
   * @param benutzerEinstellung Buchung welche angelegt wird
   */
  public post(benutzerEinstellung: PxBenutzerEinstellung): Observable<string> {
    this.updateKey(benutzerEinstellung);
    return this.httpService.post(this.endpoint, benutzerEinstellung);
  }

  /**
   * Aktualisiert eine Benutzer Einstellung anhand der Buchungsnummer
   * @param benutzerEinstellung Buchung welche aktualisiert wird
   */
  public put(benutzerEinstellung: PxBenutzerEinstellung): Observable<void> {
    this.updateKey(benutzerEinstellung);
    return this.httpService.put(this.endpoint + "/" + benutzerEinstellung.Schluessel, benutzerEinstellung);
  }

  /**
   * Löschen einer Benutzer Einstellung der Buchungsnummer.
   * @param schluessel BuchungsNr welche gelöscht wird
   */
  public delete(schluessel: string): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + this.getCombinedKey(schluessel));
  }

  /**
   * Hier werden die Query Parameter angepasst so das immer nur die Einstellungen vom Client verwendent werden
   * welcher im der Configration definiert wurde.
   * @param params Query Parameter
   */
  private updateParams(params?: PxGlobalQueryParameter) {
    if (!params) {
      params = { filter: `Schluessel@='${this.configuration.clientName}_'` };
    } else {
      if (params.filter) {
        const regex = new RegExp(`[Ss]chluessel[@=!][=!]["']([A-Za-z0-9]+)["']`, "g");
        let match;
        let updatedFilter = params.filter;
        while (match = regex.exec(params.filter.toString())) {
          const newValue = match[0].replace(match[1], `${this.configuration.clientName}_${match[1]}`);
          updatedFilter = updatedFilter.replace(match[0], newValue);
        }
        params.filter = updatedFilter;
      }

    }
  }

  /**
   * Der Schlüssel setzt sich immer aus dem Client Name und dem Benutzereinstellungsschlüssel zusammen.
   * Hier werden die Benutzereinstellungen angepasst so das in der Datenbank immer der kombinierte Schlüssel
   * vorhanden ist.
   * @param benutzerEinstellung Benutzereinstellungen
   */
  private updateKey(benutzerEinstellung: PxBenutzerEinstellung) {
    if (benutzerEinstellung && benutzerEinstellung.Schluessel) {
      benutzerEinstellung.Schluessel = this.getCombinedKey(benutzerEinstellung.Schluessel);
    }
  }

  /**
   * Der Schlüssel setzt sich immer aus dem Client Name und dem Benutzereinstellungsschlüssel zusammen.
   * @param benutzerEinstellung Benutzereinstellungen
   */
  private getCombinedKey(key: string): string {
    if (key && !key.startsWith(this.configuration.clientName + "_")) {
      return this.configuration.clientName + "_" + key;
    } else {
      return key;
    }
  }
}
