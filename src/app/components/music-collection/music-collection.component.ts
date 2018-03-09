import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MusicCollectionService, MusicCollection } from '../../modules/music-collection';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'music-collection',
  templateUrl: './music-collection.component.html',
  styleUrls: ['./music-collection.component.scss']
})
export class MusicCollectionComponent implements OnInit {

  collections: Array<MusicCollection> = [];
  
  constructor(private musicCollectionService: MusicCollectionService, private electronService: ElectronService, private chfRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.musicCollectionService.findAll()
      .then((collections: Array<MusicCollection>) => {
        this.collections = collections;
      })
      .catch((err) => console.log(err));
  }

  removeCollection(collection: MusicCollection) {
    let remove = (collection) => {
      this.musicCollectionService.remove(collection._id)
        .then(() => {
          let index = this.collections.indexOf(collection, 0);
          this.collections.splice(index, 1);
          this.chfRef.detectChanges();
        })
        .catch((err) => console.log(err));
    };

    const options = {
      type: 'warning',
      title: 'Remover Coleção de Música',
      message: "Tem certeza que que deseja remover \"" + collection.name + "\"?\nTodas as músicas serão removidas.",
      buttons: ['Sim', 'Cancelar']
    }
    this.electronService.remote.dialog.showMessageBox(this.electronService.remote.getCurrentWindow(), options, (index) => {
      if (index == 0)
        remove(collection);
    });
  }
}
