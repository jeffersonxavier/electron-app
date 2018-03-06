import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import * as path from 'path';
import * as url from 'url';

@Injectable()
export class ElectronManagerService {
    
  private electronWindow;
  
  constructor(private electronService: ElectronService) {}

  createWindow(routePath: string, width: number = 800, height: number = 600) {
    this.buildWindow(width, height);
    this.loadWindowUrl(routePath);
  }

  openExternalUrl() {
    this.electronService.shell.openExternal('https://github.com/ThorstenHans/ngx-electron');
  }

  private buildWindow(width: number, height: number) {
    this.electronWindow = new this.electronService.remote.BrowserWindow({
      width: width,
      height: height,
      center: true,
      resizable: false,
      frame: true,
      transparent: false,
      webPreferences: {
        webSecurity: false,
      }
    });
  }

  private loadWindowUrl(routePath: string) {
    if (this.electronWindow) {
      this.electronWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
        hash: routePath,
      }));
    }
  }
}