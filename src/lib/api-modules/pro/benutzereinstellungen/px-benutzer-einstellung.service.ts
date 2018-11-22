import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of, BehaviorSubject } from 'rxjs';

import { PxHttpService } from '../../../http/px-http.service';
import { PxGlobalQueryParameter } from '../../../http/px-global-query-parameter';
import { PxGettableAllServiceInterface } from '../../base-interfaces/px-gettable-all-service-interface';
import { PxBenutzerEinstellung } from './px-benutzer-einstellung.model';
import { PxPuttableServiceInterface } from '../../base-interfaces/px-puttable-service-interface';
import { PxPostableServiceInterface } from '../../base-interfaces/px-postable-service-interface';
import { PxDeletableServiceInterface } from '../../base-interfaces/px-deletable-service-interface';
import { PxConfiguration } from '../../../configuration/px-configuration';
import { PxLoginService } from '../login/px-login.service';
import { tap, filter, map } from 'rxjs/operators';


/**
 * Ruft die Einstellungen aus PRO/Einstellung ab
 */
@Injectable()
export class PxBenutzerEinstellungService implements PxGettableAllServiceInterface<PxBenutzerEinstellung>,
  PxPuttableServiceInterface<PxBenutzerEinstellung>, PxPostableServiceInterface<PxBenutzerEinstellung>,
  PxDeletableServiceInterface<PxBenutzerEinstellung>, OnDestroy {

  public endpoint = "PRO/Benutzereinstellung";

  private loginSubscription: Subscription;

  private cache: Map<string, PxBenutzerEinstellung>;

  constructor(private httpService: PxHttpService, private configuration: PxConfiguration, private loginService: PxLoginService) {
    this.loginSubscription = this.loginService.loginObservable.subscribe(login => {
      if (login) {
        this.cache = null;
        this.getAll().subscribe(settings => {
          const helper = new Map<string, PxBenutzerEinstellung>();
          settings.forEach(setting => {
            helper.set(setting.Schluessel, setting);
          })
          this.cache = helper;
        });
      }
    });
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
    if (!params && this.cache) {
      return of(Array.from(this.cache.values()));
    } else {
      params = this.createOrUpdateParams(params);
      return this.httpService.get<PxBenutzerEinstellung[]>(this.endpoint, params);
    }
  }

  /**
   * Gibt eine Benutzer Einstellung zurück
   * @param schluessel eindeuter Key
   * @param params Object mit den Parametern welche dem Request mitgegeben werden sollen
   */
  public get(schluessel: string, params?: PxGlobalQueryParameter): Observable<PxBenutzerEinstellung> {
    if (!params && this.cache) {
      return of(this.cache.get(this.getCombinedKey(schluessel)));
    } else {
      params = this.createOrUpdateParams(params);
      // Hier wurde der Get mit getAll implementiert weil wir sonst einen 404 Error erhalten bei einer Schluessel abfragen
      // ohne DB Eintrag. Beim getAll wird in diesem Fall ein leeres Array zurückgeliefert (kein 404 Error);
      // return this.httpService.get<PxBenutzerEinstellung>(this.endpoint + "/" + this.getCombinedKey(schluessel), params);
      params.filter = `Schluessel=='${this.getCombinedKey(schluessel)}',(${params.filter})`;
      return this.getAll(params).pipe(map(settings => settings.length > 0 ? settings[0] : null));
    }
  }

  /**
   * Legt eine neue Benutzer Einstellung an
   * @param benutzerEinstellung Buchung welche angelegt wird
   */
  public post(benutzerEinstellung: PxBenutzerEinstellung): Observable<string> {
    this.updateKey(benutzerEinstellung);
    return this.httpService.post(this.endpoint, benutzerEinstellung).pipe(
      tap(() => this.cache ? this.cache.set(benutzerEinstellung.Schluessel, benutzerEinstellung) : null));
  }

  /**
   * Aktualisiert eine Benutzer Einstellung anhand der Buchungsnummer
   * @param benutzerEinstellung Buchung welche aktualisiert wird
   */
  public put(benutzerEinstellung: PxBenutzerEinstellung): Observable<void> {
    this.updateKey(benutzerEinstellung);
    return this.httpService.put(this.endpoint + "/" + benutzerEinstellung.Schluessel, benutzerEinstellung).pipe(
      tap(() => this.cache ? this.cache.set(benutzerEinstellung.Schluessel, benutzerEinstellung) : null));
  }

  /**
   * Löschen einer Benutzer Einstellung der Buchungsnummer.
   * @param schluessel BuchungsNr welche gelöscht wird
   */
  public delete(schluessel: string): Observable<void> {
    return this.httpService.delete(this.endpoint + "/" + this.getCombinedKey(schluessel)).pipe(
      tap(() => this.cache ? this.cache.delete(schluessel) : null));
  }

  /**
   * Hier werden die Query Parameter angepasst so das immer nur die Einstellungen vom Client verwendent werden
   * welcher im der Configration definiert wurde.
   * @param params Query Parameter
   */
  private createOrUpdateParams(params?: PxGlobalQueryParameter): PxGlobalQueryParameter {
    if (!params) {
      params = { filter: `Schluessel@='${this.configuration.clientName}_'` };
    } else {
      if (params.filter) {
        const regex = new RegExp(`[Ss]chluessel[@=!][=!]["'](\\w+)["']`, "g");
        let match;
        let updatedFilter = params.filter;
        while (match = regex.exec(params.filter.toString())) {
          const newValue = match[0].replace(match[1], `${this.configuration.clientName}_${match[1]}`);
          updatedFilter = updatedFilter.replace(match[0], newValue);
        }
        params.filter = updatedFilter;
      }

    }
    return params;
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
