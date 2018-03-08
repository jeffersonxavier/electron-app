import { Component, OnInit } from '@angular/core';
import { MusicCollectionService, MusicCollection } from '../../modules/music-collection';

@Component({
  selector: 'music-collection',
  templateUrl: './music-collection.component.html',
  styleUrls: ['./music-collection.component.scss']
})
export class MusicCollectionComponent implements OnInit {

  collections: Array<MusicCollection> = [];
  
  constructor(private musicCollectionService: MusicCollectionService) {}

  ngOnInit() {
    console.log('MusicCollectionComponent Init.');
    this.musicCollectionService.findAll()
      .then((collections: Array<MusicCollection>) => {
        this.collections = collections;
        console.log(this.collections);
      })
      .catch((err) => console.log(err));
  }
}