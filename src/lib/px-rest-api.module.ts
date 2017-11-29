import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

// Benötigte Elemente nicht über ./index.ts einbinden, da es sonst zu einer circular dependency kommt
import { DatenbankService, InfoService, LoginService } from "./api-modules";
import { AuthentificationInterceptor } from "./authentification";
import { ConnectionSettingsService } from "./connection-settings";
import { ErrorInterceptor, InvalidFieldsInterceptor, InvalidFieldsService } from "./error";
import { REQUEST_INTERCEPTORS, RESPONSE_INTERCEPTORS, HttpService } from "./http";
import { LocalStorageService } from "./local-storage";
import { SessionIdInterceptor } from "./session";

// AuthentificationInternalService separat einbinden, damit über ./index.ts nicht verfügbar
import { AuthentificationInternalService } from './authentification/authentification-internal.service';
@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [

    // ./api-modules/pro
    DatenbankService,
    InfoService,
    LoginService,

    // ./authentification
    AuthentificationInterceptor,
    AuthentificationInternalService,

    // ./connection-settings
    ConnectionSettingsService,

    // ./error
    ErrorInterceptor,
    InvalidFieldsInterceptor,
    InvalidFieldsService,

    // ./http
    { provide: REQUEST_INTERCEPTORS, useExisting: SessionIdInterceptor, multi: true },
    { provide: RESPONSE_INTERCEPTORS, useExisting: SessionIdInterceptor, multi: true },
    { provide: RESPONSE_INTERCEPTORS, useExisting: AuthentificationInterceptor, multi: true },
    { provide: RESPONSE_INTERCEPTORS, useExisting: ErrorInterceptor, multi: true },
    HttpService,

    // ./local-storage
    LocalStorageService,

    // ./session
    SessionIdInterceptor
  ]
})
export class PxRestApiModule {
  constructor( @Optional() @SkipSelf() parentModule: PxRestApiModule) {
    if (parentModule) {
      throw new Error("PxRestApiModule is already loaded, import it in AppModule only!");
    }
  }
}
