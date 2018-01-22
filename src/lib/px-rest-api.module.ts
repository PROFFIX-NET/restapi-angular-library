import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// api-modules/adr
import { PxAdresseService } from './api-modules/adr/adresse/px-adresse.service';
import { PxAdressgruppeService } from './api-modules/adr/adressgruppe/px-adressgruppe.service';
import { PxKontaktService } from './api-modules/adr/kontakt/px-kontakt.service';
import { PxKontakttypService } from './api-modules/adr/kontakttyp/px-kontakttyp.service';
import { PxNotizService } from './api-modules/adr/notiz/px-notiz.service';
import { PxNotizartService } from './api-modules/adr/notizart/px-notizart.service';
import { PxZahlungsartService } from './api-modules/adr/zahlungsart/px-zahlungsart.service';

// api-modules/fib
import { PxBuchungService } from './api-modules/fib/buchung/px-buchung.service';
import { PxBuchungsartService } from './api-modules/fib/buchungsart/px-buchungsart.service';
import { PxKontoService } from './api-modules/fib/konto/px-konto.service';
import { PxKontoklasseService } from './api-modules/fib/kontoklasse/px-kontoklasse.service';
import { PxKostenartService } from './api-modules/fib/kostenart/px-kostenart.service';
import { PxKostenstelleService } from './api-modules/fib/kostenstelle/px-kostenstelle.service';

// api-modules/lag
import { PxArtikelService } from './api-modules/lag/artikel/px-artikel.service';
import { PxChargeService } from './api-modules/lag/charge/px-charge.service';
import { PxLagerortService } from './api-modules/lag/lagerort/px-lagerort.service';
import { PxLagerplatzService } from './api-modules/lag/lagerplatz/px-lagerplatz.service';
import { PxSerieNummerService } from './api-modules/lag/serie-nummer/px-serie-nummer.service';

// api-modules/pro
import { PxAuftragService } from './api-modules/pro/auftrag/px-auftrag.service';
import { PxBankService } from './api-modules/pro/bank/px-bank.service';
import { PxBelegartService } from './api-modules/pro/belegart/px-belegart.service';
import { PxBuchungstextService } from './api-modules/pro/buchungstext/px-buchungstext.service';
import { PxDatenbankService } from './api-modules/pro/datenbank/px-datenbank.service';
import { PxEinheitService } from './api-modules/pro/einheit/px-einheit.service';
import { PxEinheitsmatrixService } from './api-modules/pro/einheitsmatrix/px-einheitsmatrix.service';
import { PxEinstellungService } from './api-modules/pro/einstellung/px-einstellung.service';
import { PxFelddefinitionService } from './api-modules/pro/felddefinition/px-felddefinition.service';
import { PxInfoService } from './api-modules/pro/info/px-info.service';
import { PxKonditionService } from './api-modules/pro/kondition/px-kondition.service';
import { PxLandService } from './api-modules/pro/land/px-land.service';
import { PxLoginService } from './api-modules/pro/login/px-login.service';
import { PxMitarbeiterService } from './api-modules/pro/mitarbeiter/px-mitarbeiter.service';
import { PxRechtService } from './api-modules/pro/recht/px-recht.service';
import { PxRegionService } from './api-modules/pro/region/px-region.service';
import { PxSteuercodeService } from './api-modules/pro/steuercode/px-steuercode.service';
import { PxVertreterService } from './api-modules/pro/vertreter/px-vertreter.service';
import { PxWaehrungService } from './api-modules/pro/waehrung/px-waehrung.service';

// api-modules/stu
import { PxPositionsartService } from './api-modules/stu/positionsart/px-positionsart.service';
import { PxProjektService } from './api-modules/stu/projekt/px-projekt.service';
import { PxRapportService } from './api-modules/stu/rapport/px-rapport.service';
import { PxSpesenartService } from './api-modules/stu/spesenart/px-spesenart.service';

// api-modules/zei
import { PxStempelService } from './api-modules/zei/stempel/px-stempel.service';
import { PxStundenService } from './api-modules/zei/stunden/px-stunden.service';
import { PxStundenartService } from './api-modules/zei/stundenart/px-stundenart.service';
import { PxStundeninfoService } from './api-modules/zei/stundeninfo/px-stundeninfo.service';
import { StundensperreService } from './api-modules/zei/stundensperre/px-stundensperre.service';

// authentification
import { PxAuthentificationInterceptor } from './authentification/px-authentification-interceptor';
import { PxAuthentificationInternalService } from './authentification/px-authentification-internal.service';

// connection-settings
import { PxConnectionSettingsService } from './connection-settings/px-connection-settings.service';

// error
import { PxErrorInterceptor } from './error/px-error-interceptor';
import { PxInvalidFieldsInterceptor } from './error/px-invalid-fields-interceptor';
import { PxInvalidFieldsService } from './error/px-invalid-fields.service';

// http
import { PX_REQUEST_INTERCEPTORS } from './http/px-request-interceptor';
import { PX_RESPONSE_INTERCEPTORS } from './http/px-response-interceptor';
import { PxHttpService } from './http/px-http.service';

// local-storage
import { PxLocalStorageService } from './local-storage/px-local-storage.service';

// session
import { PxSessionIdInterceptor } from './session/px-session-id-interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ]
})
export class PxRestApiModule {
  constructor( @Optional() @SkipSelf() parentModule: PxRestApiModule) {
    if (parentModule) {
      throw new Error("PxRestApiModule is already loaded, import it in AppModule only!");
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PxRestApiModule,
      providers: [

        // api-modules/adr
        PxAdresseService,
        PxAdressgruppeService,
        PxKontaktService,
        PxKontakttypService,
        PxNotizService,
        PxNotizartService,
        PxZahlungsartService,

        // api-modules/fib
        PxBuchungService,
        PxBuchungsartService,
        PxKontoService,
        PxKontoklasseService,
        PxKostenartService,
        PxKostenstelleService,

        // api-modules/lag
        PxArtikelService,
        PxChargeService,
        PxLagerortService,
        PxLagerplatzService,
        PxSerieNummerService,

        // api-modules/pro
        PxAuftragService,
        PxBankService,
        PxBelegartService,
        PxBuchungstextService,
        PxDatenbankService,
        PxEinheitService,
        PxEinheitsmatrixService,
        PxEinstellungService,
        PxFelddefinitionService,
        PxInfoService,
        PxKonditionService,
        PxLandService,
        PxLoginService,
        PxMitarbeiterService,
        PxRechtService,
        PxRegionService,
        PxSteuercodeService,
        PxVertreterService,
        PxWaehrungService,

        // api-modules/stu
        PxPositionsartService,
        PxProjektService,
        PxRapportService,
        PxSpesenartService,

        // api-modules/zei
        PxStempelService,
        PxStundenService,
        PxStundenartService,
        PxStundeninfoService,
        StundensperreService,

        // authentification
        PxAuthentificationInterceptor,
        PxAuthentificationInternalService,

        // connection-settings
        PxConnectionSettingsService,

        // error
        PxErrorInterceptor,
        PxInvalidFieldsInterceptor,
        PxInvalidFieldsService,

        // http
        { provide: PX_REQUEST_INTERCEPTORS, useExisting: PxSessionIdInterceptor, multi: true },
        { provide: PX_RESPONSE_INTERCEPTORS, useExisting: PxSessionIdInterceptor, multi: true },
        { provide: PX_RESPONSE_INTERCEPTORS, useExisting: PxAuthentificationInterceptor, multi: true },
        { provide: PX_RESPONSE_INTERCEPTORS, useExisting: PxErrorInterceptor, multi: true },
        PxHttpService,

        // local-storage
        PxLocalStorageService,

        // session
        PxSessionIdInterceptor
      ]
    };
  }
}
