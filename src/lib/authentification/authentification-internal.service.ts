import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/do";
import "rxjs/add/operator/finally";
import 'rxjs/add/observable/throw';
import { HttpService } from "../http";
import { LocalStorageService } from "../local-storage";
import { Login } from "../api-modules/pro/login/login.model";
import { Configuration } from "../configuration";

/**
 * INTERNER SERVICE, DARF NICHT VERWENDET WERDEN!!! Alle Zugriffe müssen über den LoginService (/api-modules/pro/login) erfolgen!
 * Der interne Authentifizierungsservice musse erstellt werden, da wir sonst eine zirkuläre Abhängigkeit hätten, der HTTP-Service
 * verwendet diesen Service statt den Login-Service, dadurch kann im Login-Service der HTTP-Service injected werden.
 *
 * @export
 * @class AuthentificationInternalService
 */
@Injectable()
export class AuthentificationInternalService {

  public static endpoint = "PRO/Login";
  private static localstorageKeyAutoLogin = "PROFFIX.AutoLogin";

  private login: Login = null;
  private autoLogin: Login = null;
  private loginFailedSubject: Subject<void> = new Subject<void>();

  public constructor(
    private configuration: Configuration,
    private localStorageService: LocalStorageService
  ) {
    this.autoLogin = this.localStorageService.get<Login>(AuthentificationInternalService.localstorageKeyAutoLogin);
  }

  /**
   * Observable des LoginFailed-Streams, wird jedesmal gefeuert wenn der Login (und der automatische AutoLogin) fehlschlägt
   */
  public get loginFailedObservable(): Observable<void> {
    return this.loginFailedSubject.asObservable();
  }

  /**
   * Feuert einen Event in den LoginFailed-Stream
   */
  public fireLoginFailed(): void {
    this.loginFailedSubject.next(null);
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
  public activateAutoLogin(login: Login) {
    this.autoLogin = login;
    this.localStorageService.set(AuthentificationInternalService.localstorageKeyAutoLogin, login);
  }

  /**
   * Löscht und deaktiviert das AutoLogin
   */
  public removeAutoLogin() {
    this.localStorageService.remove(AuthentificationInternalService.localstorageKeyAutoLogin);
  }

  /**
   * Führt den Login aus, wenn kein Login-Objekt mitgegeben wird, werden die vom letzten Login gespeicherten Daten verwendet.
   * Wenn auch keine gespeicherten Daten vorhanden sind, werden allfällig gespeicherte AutoLogin-Daten verwendet.
   *
   * @param httpService Referenz auf den HTTP-Service (um eine zirkuläre Abhängigkeit zu verhindern)
   * @param login Login-Objekt falls kein Re- oder AutoLogin versucht wird
   */
  public doLogin(httpService: HttpService, login?: Login): Observable<Login> {

    // Falls kein Login-Objekt, zuletzt verwendeter Login- oder AutoLogin-Objekt verwenden
    if (!login) {
      login = this.login || this.autoLogin;
      if (!login) {
        return Observable.throw(null); // Kein Login gefunden, daher Fehler werfen
      }
    }

    // Benötigte Module aus der Configuration laden
    login.Module = this.configuration.getRequiredLicencedModulesAsStringArray();

    // Login ausführen
    return httpService.post(AuthentificationInternalService.endpoint, login)
      .flatMap((location: string) => httpService.get<Login>(location)).do((newLogin: Login) => {
        newLogin.Passwort = login.Passwort; // Passwort wird von der REST API entfernt, muss wieder eingefügt werden für AutoLogin
        this.login = newLogin; // Neuer Login im Login-Service speichern (für AutoLogin)
      });
  }

  /**
   * Loggt den Benutzer aus (das AutoLogin wird nicht gelöscht)
   * @param httpService Referenz auf den HTTP-Service (um eine zirkuläre Abhängigkeit zu verhindern)
   */
  public doLogout(httpService: HttpService): Observable<void> {
    return httpService.delete(AuthentificationInternalService.endpoint)
      .finally(() => {
        this.login = null;
      });
  }
}
