import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { HttpService } from '../../../http';
import { RestApiServiceInterface } from '../../base-interfaces';
import { Login } from './';

import { AuthentificationInternalService } from '../../../authentification/authentification-internal.service';

/**
 * Login-Service zum ein- und ausloggen der Benutzer und Handling des AutoLogin.
 * Dieser Service ist nur eine Façade für dem AuthentificationInternalService.
 * Dieser darf nicht direkt verwendet werden wegen dem Risiko einer circular dependency.
 */
@Injectable()
export class LoginService implements RestApiServiceInterface {

  public endpoint = AuthentificationInternalService.endpoint; // Wird nur verwendet um das Interface zu erfüllen

  public constructor(private httpService: HttpService, private authentificationService: AuthentificationInternalService) { }

  /**
   * Gibt zurück ob ein Login besteht
   */
  public get isLoggedIn(): boolean {
    return this.authentificationService.isLoggedIn;
  }

  /**
   * Gibt zurück ob das Auto-Login aktiviert ist.
   */
  public get isAutoLoginActive(): boolean {
    return this.authentificationService.isAutoLoginActive;
  }

  /**
   * Führt den Login aus, wenn kein Login-Objekt mitgegeben wird, werden die vom letzten Login gespeicherten Daten verwendet.
   * Wenn auch keine gespeicherten Daten vorhanden sind, werden allfällig gespeicherte AutoLogin-Daten verwendet.
   * @param login Login-Objekt falls kein Re- oder AutoLogin versucht wird
   */
  public doLogin(login?: Login): Observable<Login> {
    return this.authentificationService.doLogin(this.httpService, login);
  }

  /**
   * Loggt den Benutzer aus (das AutoLogin wird nicht gelöscht)
   */
  public doLogout(): Observable<void> {
    return this.authentificationService.doLogout(this.httpService);
  }

  /**
   * Aktiviert den AutoLogin, die Daten werden im LocalStorage gespeichert und beim nächsten Login verwendet
   * @param login Login-Daten welche für den AutoLogin verwendet werden
   */
  public activateAutoLogin(login: Login) {
    this.authentificationService.activateAutoLogin(login);
  }

  /**
   * Löscht und deaktiviert das AutoLogin
   */
  public removeAutoLogin() {
    this.authentificationService.removeAutoLogin();
  }

  /**
   * Observable für den LoginFailed-Stream, wird jedesmal gefeuert wenn der Login (und der automatische AutoLogin) fehlschlägt
   */
  public get loginFailedObservable(): Observable<void> {
    return this.authentificationService.loginFailedObservable;
  }

}
