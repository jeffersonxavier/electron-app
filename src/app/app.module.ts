import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HymnalModule } from './modules';

// Components
import { AppComponent } from './app.component';
import { HomeComponent, SwiperComponent } from './components';

// Services
import { ElectronManagerService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SwiperComponent,
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule,
    HymnalModule.forRoot(),
  ],
  providers: [
    ElectronManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
