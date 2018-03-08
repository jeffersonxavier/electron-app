import { Component, OnInit } from '@angular/core';
import { MusicCollectionService, MusicCollection } from '../../modules/music-collection';

@Component({
  selector: 'music-collection',
  templateUrl: './music-collection.component.html',
  styleUrls: ['./music-collection.component.scss']
})
export class MusicCollectionComponent implements OnInit {

  ngOnInit() {
    console.log('MusicCollectionComponent Init.');

    // let musicCollection = new MusicCollection("Harpa Cristã");
    // this.musicCollectionService.createMusicCollection(musicCollection)
    //   .then((musicCollection: MusicCollection) => console.log(musicCollection))
    //   .catch((err) => console.log(err));
  }
}