PROFFIX REST API Library für Angular
====================================

Die PROFFIX REST API Library für [Angular](https://angular.io) ermöglicht die einfache Kommunikation mit der PROFFIX REST API in Angular-
Anwendungen. Die Library ist unabhängig von der grafischen Oberfläche und kann mit Ionic oder anderen Frameworks verwendet werden.


Erste Schritte
--------------

Ein lauffähiges Angular-Projekt muss vorhanden sein. Über die [Angular CLI](https://cli.angular.io) lässt sich das einfach erstellen.

### 1. Library im Projekt installieren
Die Library ist über npm verfügbar: `npm install @proffix/restapi-angular-library --save`

### 2. Konfiguration und Bootstrapping
Es muss eine von `Configuration` vererbte Klasse erstellt werden, in der die beiden abstrakten Methoden `requiredWebserviceVersion` und
`requiredLicencedModules` überschrieben werden müssen.

```ts
import { Injectable } from '@angular/core';
import { PxConfiguration, PxModule, PxVersion } from '@proffix/restapi-angular-library';

@Injectable()
export class AppConfiguration extends PxConfiguration {
  public get requiredWebserviceVersion(): PxVersion {
    return { Major: 2, Minor: 2, Patch: 0 };
  }
  public get requiredLicencedModules(): PxModule[] {
    return [ PxModule.ZEI, PxModule.ADR ];
  }
}
```

Die `AppConfiguration` muss *Injectable* sein, da sie dem dem Dependency Injector als `Configuration` für die Library mitgegeben werden muss.
Zusätzliche wird das `PxRestApiModule` geladen und über `PxRestApiModule.forRoot()` importiert.

```ts
// Root Module (src/app.module.ts)

import { PxRestApiModule, PxConfiguration } from '@proffix/restapi-angular-library';

// ...
imports: [ PxRestApiModule.forRoot() ],
providers: [
  AppConfiguration,
  { provide: PxConfiguration, useExisting: AppConfiguration }
],
// ...
```

### 3. Verbindungseinstellungen hinterlegen
Die Verbindungseinstellungen (Klasse `ConnectionSettings`) werden durch den `ConnectionSettingsService` im LocalStorage abgelegt.

```ts
// Angular Component

import { PxConnectionSettings, PxConnectionSettingsService } from '@proffix/restapi-angular-library';

// ...
constructor(private connectionSettingsService: PxConnectionSettingsService) {
  let connectionSettings: PxConnectionSettings =  { WebserviceUrl: "https://restapi.company.invalid", WebservicePasswortHash: "d3612ab62..."}
  connectionSettingsService.current = connectionSettings;
}
```
Hinweis: Der SHA256 kann über die statische Methode `Hash.sha256` erstellt werden, nachdem die Klasse `Hash` importiert wurde.

### 4. Login durchführen
Der Login kann durchgeführt werden, wenn gültige Verbindungseinstellungen hinterlegt wurden.

```ts
// Angular Component

import { PxLogin, PxLoginService, PxConfiguration } from '@proffix/restapi-angular-library';

// ...
constructor(private loginService: PxLoginService, private configuration: PxConfiguration) {
  let login: PxLogin =  {
    Benutzer: "pxuser",
    Passwort: "d3612ab62...",
    Datenbank: { Name: "PXDB" },
    Module: this.configuration.getRequiredLicencedModulesAsStringArray() // Die Module können aus der AppConfiguration gelesen werden
  }
  this.loginService.doLogin(login).subscribe( // nur zu Anschauungszwecken, nie HTTP-Requests in einem Konstruktor absetzen
      login => console.log("Login successed: " + login.Benutzer),
      error => console.log("Login failed")
    );
}
```
