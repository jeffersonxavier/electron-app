import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private electronService: ElectronService) {}

  launchWindow() {
    console.log('launchWindow....');
    this.electronService.shell.openExternal('https://github.com/ThorstenHans/ngx-electron');
  }
}
