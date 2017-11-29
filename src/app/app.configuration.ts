import { Injectable } from '@angular/core';
import { Configuration, Module, Version } from '@proffix/restapi-angular-library';

@Injectable()
export class AppConfiguration extends Configuration {
  public get requiredWebserviceVersion(): Version {
    return { Major: 2, Minor: 0, Patch: 0 };
  }
  public get requiredLicencedModules(): Module[] {
    return [Module.ZEI];
  }
}
