import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/finally";
import 'rxjs/add/observable/throw';

import { PxHttpService } from "../http/px-http.service";
import { PxLocalStorageService } from "../local-storage/px-local-storage.service";
import { PxLogin } from "../api-modules/pro/login/px-login.model";
import { PxConfiguration } from "../configuration/px-configuration";
import { PxError } from "../public_api";
import { log } from "util";

/**
 * INTERNER SERVICE, DARF NICHT VERWENDET WERDEN!!! Alle Zugriffe müssen über den LoginService (/api-modules/pro/login) erfolgen!
 * Der interne Authentifizierungsservice musse erstellt werden, da wir sonst eine zirkuläre Abhängigkeit hätten, der HTTP-Service
 * verwendet diesen Service statt den Login-Service, dadurch kann im Login-Service der HTTP-Service injected werden.
 *
 * @export
 * @class AuthentificationInternalService
 */
@Injectable()
export class PxAuthentificationInternalService {

  public static endpoint = "PRO/Login";
  private static localstorageKeyAutoLogin = "PROFFIX.AutoLogin";

  private login: PxLogin = null;
  private autoLogin: PxLogin = null;
  private loginSubject: Subject<PxLogin> = new Subject<PxLogin>();

  public constructor(
    private configuration: PxConfiguration,
    private localStorageService: PxLocalStorageService
  ) {
    this.autoLogin = this.localStorageService.get<PxLogin>(PxAuthentificationInternalService.localstorageKeyAutoLogin);
  }

  /**
   * Observable des Login-Streams, wird jedesmal gefeuert wenn der Login (und der automatische AutoLogin) statt findet oder fehlschlägt
   * Bei erfolgreichem Login, befindet sich darin das PxLogin-Objekt, wenn der Login fehlschlägt wird ein Error geworfen
   */
  public get loginObservable(): Observable<PxLogin> {
    return this.loginSubject.asObservable();
  }

  /**
   * Feuert einen Event in den Login-Stream
   * @param login Login-Objekt vom erfolgreichen Login oder null bei einem Logout
   */
  public fireLoginSuccessful(login: PxLogin) {
    this.loginSubject.next(login);
  }

  /**
   * Feuert einen Error-Event in den Login-Stream
   */
  public fireLoginError(error?: PxError): void {
    this.loginSubject.error(error);
  }

  /**
   * Gibt an ob der Benutzer eingeloggt ist (ob ein (früher einmal) gültiges Login-Objekt vorhanden ist)
   */
  public get isLoggedIn(): boolean {
    return this.login != null;
  }

  /**
   * Gibt an ob Auto Login Daten vorhanden sind.
   */
  public get isAutoLoginActive(): boolean {
    return this.autoLogin != null;
  }

  /**
   * Aktiviert den AutoLogin, die Daten werden im LocalStorage gespeichert und beim nächsten Login verwendet
   * @param login Login-Daten welche für den AutoLogin verwendet werden
   */
  public activateAutoLogin(login: PxLogin) {
    this.autoLogin = login;
    this.localStorageService.set(PxAuthentificationInternalService.localstorageKeyAutoLogin, login);
  }

  /**
   * Löscht und deaktiviert das AutoLogin
   */
  public removeAutoLogin() {
    this.localStorageService.remove(PxAuthentificationInternalService.localstorageKeyAutoLogin);
  }

  /**
   * Führt den Login aus, wenn kein Login-Objekt mitgegeben wird, werden die vom letzten Login gespeicherten Daten verwendet.
   * Wenn auch keine gespeicherten Daten vorhanden sind, werden allfällig gespeicherte AutoLogin-Daten verwendet.
   *
   * @param httpService Referenz auf den HTTP-Service (um eine zirkuläre Abhängigkeit zu verhindern)
   * @param login Login-Objekt falls kein Re- oder AutoLogin versucht wird
   */
  public doLogin(httpService: PxHttpService, login?: PxLogin): Observable<PxLogin> {

    // Falls kein Login-Objekt, zuletzt verwendeter Login- oder AutoLogin-Objekt verwenden
    if (!login) {
      login = this.login || this.autoLogin;
      if (!login) {
        this.fireLoginError();
        return Observable.throw(null); // Kein Login gefunden, daher Fehler werfen
      }
    }

    // Benötigte Module aus der Configuration laden
    login.Module = this.configuration.getRequiredLicencedModulesAsStringArray();

    // Login ausführen
    return httpService.post(PxAuthentificationInternalService.endpoint, login)
      .do(null, error => this.fireLoginError(error))
      .flatMap((location: string) => httpService.get<PxLogin>(location)).do((newLogin: PxLogin) => {
        newLogin.Passwort = login.Passwort; // Passwort wird von der REST API entfernt, muss wieder eingefügt werden für AutoLogin
        this.login = newLogin; // Neuer Login im Login-Service speichern (für AutoLogin)
        this.fireLoginSuccessful(newLogin);
      });
  }

  /**
   * Loggt den Benutzer aus (das AutoLogin wird nicht gelöscht)
   * @param httpService Referenz auf den HTTP-Service (um eine zirkuläre Abhängigkeit zu verhindern)
   */
  public doLogout(httpService: PxHttpService): Observable<void> {
    return httpService.delete(PxAuthentificationInternalService.endpoint)
      .finally(() => {
        this.fireLoginSuccessful(null);
        this.login = null;
      });
  }
}
