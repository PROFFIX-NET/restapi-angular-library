import { Injectable } from "@angular/core";

/**
 * Stellt den Zugriff auf den Key/Value-basierten HTML5-LocalStorage zur Verfügung
 */
@Injectable()
export class LocalStorageService {

  /**
   * Gibt die Anzahl der Schlüssel aus dem LocalStorage zurück
   */
  public get length() {
    return window.localStorage.length;
  }

  /**
   * Gibt das Objekt mit dem angegebenen Schlüssel aus dem LocalStorage zurück
   * @param T Typ in den das Objekt gemappt wird
   * @param {string} key Schlüssl unter dem das Objekt abgelegt ist
   */
  public get<T>(key: string): T {
    return JSON.parse(window.localStorage.getItem(key)) as T;
  }

  /**
   * Speichert ein beliebiges Objekt im LocalStorage
   * @param key Schlüssel unter dem das Objekt abgelegt wird
   * @param value Objekt das abgelegt wird
   */
  public set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Entfernt das Objekt mit dem angegebenen Schlüssel aus dem LocalStorage
   * @param key Schlüssel des Objekts welches entfernt wird
   */
  public remove(key: string) {
    window.localStorage.removeItem(key);
  }

  /**
   * Entfernt alle Objekte aus dem LocalStorage
   */
  public clear() {
    window.localStorage.clear();
  }

  /**
   * Gibt den Schlüssel für das Objekt mit dem angegebenen Index zurück
   * @param index Index des Eintrags von dem der Schlüssel zurück gegeben wird
   */
  public key(index: number): string {
    return window.localStorage.key(index);
  }
}
