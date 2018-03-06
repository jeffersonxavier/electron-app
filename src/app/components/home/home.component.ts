import { Component, HostListener } from '@angular/core';
import { ElectronManagerService } from '../../services';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService) {}

  @HostListener('window:keyup', ['$event'])
  listenEvents(event: KeyboardEvent) {
    console.log(event);
    this.electronManagerService.createWindow('swiper');
  }
}
