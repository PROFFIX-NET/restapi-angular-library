3.0.0 (14.12.2018)
==================
- ***Breaking Change***: Sämtliche Datenmodelle entfernt, diese müssen zukünftig manuell und an das Projekt angepasst implementiert werden.
- ***Breaking Change***: Services für Endpunkte entfernt. Neu den generischen `PxHttpService` verwenden.
- Beispiel Applikation auf die neue Library angepasst


2.0.22 (28.11.2018)
-------------------
- Fix Login Error (Uncaught TypeError: Cannot read property 'ngOriginalError' of null)

2.0.21 (22.11.2018)
-------------------
- Cache für Benutzereinstellung Service implementiert

2.0.20 (21.11.2018)
-------------------
- Angular Version aktualisiert (v7)
- Bugfix Benutzereinstellung Endpunkt

2.0.19 (06.11.2018)
-------------------
- Benutzereinstellung Endpunkt implementiert

2.0.18 (21.08.2018)
-------------------
- PxDateFormatter updated

2.0.17 (21.08.2018)
-------------------
- moment js import refactored
- PxDateFormat Konstante definiert

2.0.16 (03.07.2018)
-------------------
- fix BuchungszeileNr im Buchung Model optional.

2.0.15 (03.07.2018)
-------------------
- fix Buchung Model (Buchungsart)
- BuchungszeileNr im Buchung Model hinzugefügt.

2.0.14 (21.06.2018)
-------------------
- AutoLogin refactored
- Optionaler Parameter bei ZEI/Stempel integriert

2.0.13 (05.06.2018)
-------------------
- Fehler beim AutoLogin korrigiert

2.0.12 (01.06.2018)
-------------------
- Fehler in PxHttpServer beim Hinzufügen von Parametern behoben

2.0.11 (31.05.2018)
------------------
- angular updated durchgeführt (v6)
- veraltetes @angular/http durch neuen @angular/common/http client ersetzt ([#6](https://github.com/PROFFIX-NET/restapi-angular-library/issues/6))
- fix moment js warning im px-date-formatter
- px-date-formatter string handling überarbeitet.

2.0.10 (03.04.2018)
------------------
- Optionale URL-Parameter bei PRO/Datenbank implementiert.

2.0.9 (28.03.2018)
------------------
- Neuer Endpunkt für Konto saldo implementiert.

2.0.8 (28.03.2018)
------------------
- Steuercode Modell mit GueltigVon, GueltigBis Eigenschaft erweitert.

2.0.7 (19.03.2018)
------------------
- PxDateFormatter auf 24h Format umgestellt.
- Neuer Endpunkt integriert Kurs aktualisierung.

2.0.6 (07.03.2018)
------------------
- base interfaces für flat modelle implementiert.

2.0.5 (26.02.2018)
------------------
- PxBuchungsart Modell korrigiert (HabenKonto)

2.0.4 (07.02.2018)
------------------
- Neue Endpunkte integriert BuchungFlat unter FIB, DEB, KRE.

2.0.3 (07.02.2018)
------------------
- PxDateFormatter erstellt. Dieser beinhaltet die Funktionalität für das Formatieren von
  Standard Datumszeichenfolgen oder Date Objekten zu PROFFIX Datumszeichenfolge.

2.0.2 (07.02.2018)
------------------
- PxKonto Modell fehlende Eigenschaften erweitert.

2.0.1 (23.01.2018)
------------------
- Base Interfaces der API Module veröffentlicht

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
