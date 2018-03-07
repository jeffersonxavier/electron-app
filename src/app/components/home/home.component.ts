import { Component } from '@angular/core';
import { ElectronManagerService } from '../../services';
import { HymnalService, Hymnal } from '../../modules/hymnal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private electronManagerService: ElectronManagerService, private hymnalService: HymnalService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    let hymnal = new Hymnal("Harpa Cristã");
    this.hymnalService.createHymnal(hymnal);
  }
}
