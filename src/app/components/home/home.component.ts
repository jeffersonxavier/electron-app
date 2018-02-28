import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronService: ElectronService) {}

  launchWindow() {
    console.log('launchWindow....');
    this.electronService.shell.openExternal('https://github.com/ThorstenHans/ngx-electron');
  }
}
