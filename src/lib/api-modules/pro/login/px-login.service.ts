import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { PxHttpService } from '../../../http/px-http.service';
import { PxRestApiServiceInterface } from '../../base-interfaces/px-rest-api-service-interface';
import { PxLogin } from './px-login.model';
import { PxAuthentificationInternalService } from '../../../authentification/px-authentification-internal.service';

/**
 * Login-Service zum ein- und ausloggen der Benutzer und Handling des AutoLogin.
 * Dieser Service ist nur eine Façade für dem AuthentificationInternalService.
 * Dieser darf nicht direkt verwendet werden wegen dem Risiko einer circular dependency.
 */
@Injectable()
export class PxLoginService implements PxRestApiServiceInterface {

  public endpoint = PxAuthentificationInternalService.endpoint; // Wird nur verwendet um das Interface zu erfüllen

  public constructor(private httpService: PxHttpService, private authentificationService: PxAuthentificationInternalService) { }

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
   * @param activateAutoLogin Bei true wird bei erfolgreichem Login der Auto Login aktiviert (bei false wird nichts gemacht)
   */
  public doLogin(login?: PxLogin, activateAutoLogin?: boolean): Observable<PxLogin> {
    return this.authentificationService.doLogin(this.httpService, login).do(() => {
      if (activateAutoLogin) {
        this.activateAutoLogin(login);
      }
    });
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
  public activateAutoLogin(login: PxLogin) {
    this.authentificationService.activateAutoLogin(login);
  }

  /**
   * Löscht und deaktiviert das AutoLogin
   */
  public removeAutoLogin() {
    this.authentificationService.removeAutoLogin();
  }

  /**
   * Observable des Login-Streams, wird jedesmal gefeuert wenn der Login (und der automatische AutoLogin) statt findet oder fehlschlägt
   * Bei erfolgreichem Login, befindet sich darin das PxLogin-Objekt, wenn der Login fehlschlägt wird ein Error geworfen
   */
  public get loginObservable(): Observable<PxLogin> {
    return this.authentificationService.loginObservable;
  }

}
