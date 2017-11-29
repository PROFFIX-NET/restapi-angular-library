import { Injectable } from "@angular/core";

import { LocalStorageService } from "../local-storage";
import { ConnectionSettings } from "./";

/**
 * Verwaltet die Verbindungseinstellungen
 */
@Injectable()
export class ConnectionSettingsService {

  private static localstorageKeyWebserviceUrl = "PROFFIX.ConnectionSettings.WebserviceUrl";
  private static localstorageKeyPasswortHash = "PROFFIX.ConnectionSettings.WebservicePasswortHash";

  private cache: ConnectionSettings;

  public constructor(
    private localStorageService: LocalStorageService
  ) { }

  /**
   * Gibt die aktellen ConnectionSettings zurück (wird gecached).
   * Falls Werte im Objekt angepasst werden, muss das Objekt neu gesetzt werden, sonst wird nichts gespeichert.
   */
  public get current(): ConnectionSettings {
    if (this.cache == null) {
      this.cache = {
        WebserviceUrl: this.localStorageService.get<string>(ConnectionSettingsService.localstorageKeyWebserviceUrl),
        WebservicePasswortHash: this.localStorageService.get<string>(ConnectionSettingsService.localstorageKeyPasswortHash)
      };
    }
    return this.cache;
  }
  public set current(currentSettings: ConnectionSettings) {
    this.cache = currentSettings;
    this.localStorageService.set(ConnectionSettingsService.localstorageKeyWebserviceUrl, currentSettings.WebserviceUrl);
    this.localStorageService.set(ConnectionSettingsService.localstorageKeyPasswortHash, currentSettings.WebservicePasswortHash);
  }
}
