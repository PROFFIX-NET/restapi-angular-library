import { Component, OnInit } from '@angular/core';

import {
  PxConnectionSettings,
  PxConnectionSettingsService,
  PxInfo,
  PxInfoService,
  PxLogin,
  PxLoginService,
  PxStundeninfo,
  PxStundeninfoService,
  PxStempelService,
  PxMitarbeiterService
} from "../lib/public_api";
import { AppConfiguration } from './app.configuration';

@Component({
  selector: 'app-root',
  template: '<h1>PROFFIX REST API Library für Angular</h1><pre>{{output}}</pre>'
})
export class AppComponent implements OnInit {
  output = "";

  private login: PxLogin;

  constructor(
    private appConfiguration: AppConfiguration,
    private connectionSettingsService: PxConnectionSettingsService,
    private infoService: PxInfoService,
    private loginService: PxLoginService,
    private stundeninfoService: PxStundeninfoService, private s: PxStempelService, private m: PxMitarbeiterService
  ) {
    this.connectionSettingsService.current = {
      WebserviceUrl: "https://remote.proffix.net:11011/pxapi/v2",
      WebservicePasswortHash: "16378f3e3bc8051435694595cbd222219d1ca7f9bddf649b9a0c819a77bb5e50"
    };
    this.login = {
      Benutzer: "Gast",
      Passwort: "16ec7cb001be0525f9af1a96fd5ea26466b2e75ef3e96e881bcb7149cd7598da",
      Datenbank: { Name: "DEMODB", Bezeichnung: "" },
      Module: this.appConfiguration.getRequiredLicencedModulesAsStringArray()
    };
  }

  ngOnInit(): void {
    this.checkConnection();
  }

  private checkConnection(): void {
    this.printLog("Prüfe Verbindung...");
    this.infoService.getInfo().subscribe(
      info => {
        this.printLog(`Verbindung besteht, REST API Version: ${info.Version}`);
        this.doLogin();
      },
      error => this.printError(`Verbindung konnte nicht hergestellt werden: ${JSON.stringify(error)}`)
    );
  }

  private doLogin(): void {
    this.printLog("Versuche Login...");
    this.loginService.doLogin(this.login).subscribe(
      login => {
        this.login = login;
        this.printLog(`Login erfolgreich: ${this.login.Mitarbeiter.Name}`);
        this.getStundeninfo();
      },
      loginError => this.printError(`Login fehlgeschlagen: ${JSON.stringify(loginError)}`)
    );
  }

  private getStundeninfo(): void {
    this.m.getAll().subscribe(m => {
      m.forEach(element => {
        this.s.getStempel(element.MitarbeiterNr).subscribe(s => {
          console.log(element);
          console.log(s);
        });
      });
    });
    this.printLog("Stundeninfo abrufen...");
    this.stundeninfoService.getStundeninfo().subscribe(
      stundeninfo => this.printLog(`Stundeninfo abrufen erfolgreich, aktueller Stundensaldo: ${stundeninfo.SaldoVortag}`),
      stundeninfoError => this.printError(`Stundeninfo abrufen fehlgeschlagen: ${JSON.stringify(stundeninfoError)}`)
    );
  }

  private printLog(text: string): void {
    console.log(text);
    this.output += `${text}\r\n`;
  }

  private printError(text: string): void {
    console.error(text);
    this.output += `!!! FEHLER: ${text}\r\n`;
  }

}
