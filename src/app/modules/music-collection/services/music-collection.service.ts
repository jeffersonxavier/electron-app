import { Injectable } from '@angular/core';
import { DatabaseEnum } from '../enums';
import { MusicCollection } from '../models';
import { DatabaseService } from '../../../services';
import * as Datastore from 'nedb';

@Injectable()
export class MusicCollectionService {

  private database: Datastore;
  constructor(private databaseService: DatabaseService) {}

  createMusicCollection(musicCollection: MusicCollection): Promise<MusicCollection> {
    return new Promise((resolve, reject) => {
      return this.getMusicCollectionByName(musicCollection.name)
        .then((musicCollectionFound: MusicCollection) => {
          if (!musicCollectionFound) {
            return this.databaseService.insert(DatabaseEnum.musicCollections.toString(), musicCollection)
              .then((data: MusicCollection) => resolve(data))
              .catch((err) => reject(err));
          }
          else
            reject(new Error("Already exists a music collection with this name."));
        })
        .catch((err) => reject(err));
    });
  }

  findAll(): Promise<Array<MusicCollection>> {
    return new Promise((resolve, reject) => {
      return this.databaseService.find(DatabaseEnum.musicCollections.toString(), {})
        .then((collections: Array<MusicCollection>) => resolve(collections))
        .catch((err) => reject(err));
    });
  }

  private getMusicCollectionByName(collectionName: String): Promise<MusicCollection> {
    return new Promise((resolve, reject) => {
      return this.databaseService.find(DatabaseEnum.musicCollections.toString(), { name: collectionName }, true)
        .then((musicCollection: MusicCollection) => resolve(musicCollection))
        .catch((err) => reject(err));
    });
  }
}
