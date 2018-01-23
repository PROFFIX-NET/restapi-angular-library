import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfiguration } from './app.configuration';
import { PxRestApiModule, PxConfiguration, PxStundeninfoService } from '../lib/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PxRestApiModule.forRoot()
  ],
  providers: [
    AppConfiguration,
    { provide: PxConfiguration, useExisting: AppConfiguration }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
