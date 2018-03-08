import { Component } from '@angular/core';
import { ElectronManagerService } from '../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }
}
