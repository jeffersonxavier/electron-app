import { Component } from '@angular/core';
import { ElectronManagerService } from '../../services';
import { HymnalService, Hymnal, MusicLetter, Strophe } from '../../modules/hymnal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showMusicOptions: Boolean = false;

  constructor(private electronManagerService: ElectronManagerService, private hymnalService: HymnalService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    let hymnal = new Hymnal("Harpa Cristã");
    this.hymnalService.createHymnal(hymnal)
      .then((hymnal: Hymnal) => console.log(hymnal))
      .catch((err) => console.log(err));
  }
}
