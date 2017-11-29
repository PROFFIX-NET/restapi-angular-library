import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfiguration } from './app.configuration';
import { PxRestApiModule, Configuration, StundeninfoService } from '@proffix/restapi-angular-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PxRestApiModule
  ],
  providers: [
    AppConfiguration,
    { provide: Configuration, useExisting: AppConfiguration },
    StundeninfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
