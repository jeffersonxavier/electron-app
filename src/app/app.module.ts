import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MusicCollectionModule } from './modules';

// Components
import { AppComponent } from './app.component';
import { TopbarComponent, FooterComponent, HomeComponent, MusicCollectionComponent, SwiperComponent } from './components';

// Services
import { ElectronManagerService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    HomeComponent,
    MusicCollectionComponent,
    SwiperComponent,
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    AppRoutingModule,
    MusicCollectionModule.forRoot(),
  ],
  providers: [
    ElectronManagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
