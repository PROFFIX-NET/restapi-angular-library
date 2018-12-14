import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PxDatenbankService } from './datenbank/px-datenbank.service';
import { PxInfoService } from './info/px-info.service';
import { PxLoginService } from './login/px-login.service';

// connection-settings
import { PxConnectionSettingsService } from './connection-settings/px-connection-settings.service';

// error
import { PxErrorInterceptor } from './error/px-error-interceptor';
import { PxErrorService } from './error/px-error.service';

// http
import { PxHttpService } from './http/px-http.service';
import { PxHttpInterceptor } from './http/px-http-interceptor';

// local-storage
import { PxLocalStorageService } from './local-storage/px-local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class PxRestApiModule {
  constructor(@Optional() @SkipSelf() parentModule: PxRestApiModule) {
    if (parentModule) {
      throw new Error("PxRestApiModule is already loaded, import it in AppModule only!");
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PxRestApiModule,
      providers: [

        PxDatenbankService,
        PxInfoService,
        PxLoginService,

        // connection-settings
        PxConnectionSettingsService,

        // error
        PxErrorService,
        { provide: HTTP_INTERCEPTORS, useClass: PxErrorInterceptor, multi: true },

        // http
        PxHttpService,
        { provide: HTTP_INTERCEPTORS, useClass: PxHttpInterceptor, multi: true },

        // local-storage
        PxLocalStorageService,
      ]
    };
  }
}
