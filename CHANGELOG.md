2.0.0 (23.01.2018)
==================
- ***Breaking Change***: Alle Namen von exportieren Elementen (Klassen, Interfaces, Konstanten, usw.) beginnen nun mit Px ([#4](https://github.com/PROFFIX-NET/restapi-angular-library/issues/4))
- ***Breaking Change***: Alle Services können über `PxRestApiModule.forRoot()` direkt importiert werden und müssen nicht mehr zur Provider-Liste im `AppModule` hinzugefügt werden
- ***Breaking Change***: PxLoginService überarbeitet ([#2](https://github.com/PROFFIX-NET/restapi-angular-library/issues/2))
  - `doLogin()` kann nun direkt das Auto Login aktivieren
  - `loginFailedObservable` (wurde bei fehlerhaftem Login gefeuert) wurde ersetzt durch `loginObservable` welches bei jedem Login (erfolgreich und fehlerhaft) gefeuert wird
- ***Breaking Change***: Erster Parameter bei `PxMitarbeiterService.get()` von String auf Number korrigiert und entspricht somit dem Datenmodell ([#1](https://github.com/PROFFIX-NET/restapi-angular-library/issues/1))
- Alle Barrel-Files gelöscht um Circular Dependencies zu verhindern ([#5](https://github.com/PROFFIX-NET/restapi-angular-library/issues/5))

1.0.4 (16.01.2018)
------------------
- Verbesserungen am README

1.0.3 (03.01.2018)
------------------
- Korrigiert Date-Felder in den API-Models ([#3](https://github.com/PROFFIX-NET/restapi-angular-library/issues/3))

1.0.2 (29.11.2017)
------------------
- Verbesserungen am README

1.0.1 (14.11.2017)
------------------
- Zusätzlich die README-, CHANGELOG- und LICENSE-Datei im NPM-Package veröffentlicht

1.0.0 (14.11.2017)
==================
- Erster Release der Library
- Kompatibilität zur Angular 5 hergestellt
