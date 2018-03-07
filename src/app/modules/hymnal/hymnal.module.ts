import { NgModule, ModuleWithProviders } from '@angular/core';

// Services
import { HymnalService } from './services';
import { DatabaseService } from '../../services';

@NgModule({
  providers: [
    DatabaseService,
    HymnalService,
  ],
})
export class HymnalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HymnalModule,
      providers: [
        HymnalService,
      ]
    }
  }
}
