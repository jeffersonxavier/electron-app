import { Component, HostListener } from '@angular/core';
import { ElectronManagerService, DatabaseService } from '../../services';
import { Database } from '../../enums';
import { Hymnal } from '../../models';
import * as Datastore from 'nedb';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService, private databaseService: DatabaseService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    let hymnal = new Hymnal('Christian Harp');
    this.databaseService.insert(Database.hymnals, hymnal)
      .then((res) => {
        console.log('then.....')
        console.log(res);
      })
      .catch((err)  => {
        console.log('catch......')
        console.log(err);
      });
  }
}
