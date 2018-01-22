import { Injectable } from "@angular/core";

import { PxLocalStorageService } from "../local-storage/px-local-storage.service";
import { PxConnectionSettings } from "./px-connection-settings.model";

/**
 * Verwaltet die Verbindungseinstellungen
 */
@Injectable()
export class PxConnectionSettingsService {

  private static localstorageKeyWebserviceUrl = "PROFFIX.ConnectionSettings.WebserviceUrl";
  private static localstorageKeyPasswortHash = "PROFFIX.ConnectionSettings.WebservicePasswortHash";

  private cache: PxConnectionSettings;

  public constructor(
    private localStorageService: PxLocalStorageService
  ) { }

  /**
   * Gibt die aktellen ConnectionSettings zurück (wird gecached).
   * Falls Werte im Objekt angepasst werden, muss das Objekt neu gesetzt werden, sonst wird nichts gespeichert.
   */
  public get current(): PxConnectionSettings {
    if (this.cache == null) {
      this.cache = {
        WebserviceUrl: this.localStorageService.get<string>(PxConnectionSettingsService.localstorageKeyWebserviceUrl),
        WebservicePasswortHash: this.localStorageService.get<string>(PxConnectionSettingsService.localstorageKeyPasswortHash)
      };
    }
    return this.cache;
  }
  public set current(currentSettings: PxConnectionSettings) {
    this.cache = currentSettings;
    this.localStorageService.set(PxConnectionSettingsService.localstorageKeyWebserviceUrl, currentSettings.WebserviceUrl);
    this.localStorageService.set(PxConnectionSettingsService.localstorageKeyPasswortHash, currentSettings.WebservicePasswortHash);
  }
}
