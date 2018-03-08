import { Component } from '@angular/core';
import { ElectronManagerService } from '../../services';
import { MusicCollectionService, MusicCollection } from '../../modules/music-collection';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showMusicOptions: Boolean = false;

  constructor(private electronManagerService: ElectronManagerService, private musicCollectionService: MusicCollectionService) {}

  openSwiperExample() {
    this.electronManagerService.createWindow('swiper');
  }

  ngOnInit() {
    let musicCollection = new MusicCollection("Harpa Cristã");
    this.musicCollectionService.createMusicCollection(musicCollection)
      .then((musicCollection: MusicCollection) => console.log(musicCollection))
      .catch((err) => console.log(err));
  }
}
