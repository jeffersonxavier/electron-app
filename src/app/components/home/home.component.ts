import { Component, HostListener } from '@angular/core';
import { ElectronManagerService } from '../../services';
import * as Datastore from 'nedb';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    console.log('on init.....');
    console.log(__dirname);
    
    let db = new Datastore({
      // filename: path.join(this.electronService.remote.app.getAppPath(),"electron.db"),
      filename: 'electron.db',
      autoload: true
    });

    db.insert({ name: 'product001', quantity : 100 });
    db.insert({ name: 'product002', quantity : 100 });
  }
}
