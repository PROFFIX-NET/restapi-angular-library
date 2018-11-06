import { Injectable } from '@angular/core';
import { PxConfiguration, PxModule, PxVersion } from '../lib/public_api';

@Injectable()
export class AppConfiguration extends PxConfiguration {
  public get clientName(): string {
    return "restapiAngularLibraryTest";
  }
  public get requiredWebserviceVersion(): PxVersion {
    return { Major: 2, Minor: 0, Patch: 0 };
  }
  public get requiredLicencedModules(): PxModule[] {
    return [PxModule.ZEI];
  }
}
