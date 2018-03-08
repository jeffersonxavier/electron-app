import { NgModule, ModuleWithProviders } from '@angular/core';

// Services
import { MusicCollectionService } from './services';
import { DatabaseService } from '../../services';

@NgModule({
  providers: [
    DatabaseService,
    MusicCollectionService,
  ],
})
export class MusicCollectionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MusicCollectionModule,
      providers: [
        MusicCollectionService,
      ]
    }
  }
}
