import { Component, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as path from 'path';
import * as url from 'url';

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

    let newWin = new this.electronService.remote.BrowserWindow({
      width: 800,
      height: 600,
      center: true,
      resizable: false,
      frame: true,
      transparent: false,
      webPreferences: {
        webSecurity: false,
      }
    });
  
    newWin.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
      hash: 'swiper'
    }));
    newWin.webContents.openDevTools();
  }

  launchWindow() {
    console.log('launchWindow....');
    this.electronService.shell.openExternal('https://github.com/ThorstenHans/ngx-electron');
  }
}
