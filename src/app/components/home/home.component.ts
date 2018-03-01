import { Component, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronService: ElectronService) {}

  @HostListener('window:keyup', ['$event'])
  listenEvents(event: KeyboardEvent) {
    console.log(event); 
  }

  launchWindow() {
    console.log('launchWindow....');
    this.electronService.shell.openExternal('https://github.com/ThorstenHans/ngx-electron');
  }
}
