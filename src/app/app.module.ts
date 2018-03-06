import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';

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
  ],
  providers: [
    ElectronManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
