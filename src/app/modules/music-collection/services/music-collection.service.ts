import { Injectable } from '@angular/core';
import { DatabaseEnum } from '../enums';
import { MusicCollection, MusicLetter } from '../models';
import { DatabaseService } from '../../../services';
import { environment } from '../../../../environments/environment';
import * as Datastore from 'nedb';
import * as christianHarp from '../../../../assets/files/hc.json';

@Injectable()
export class MusicCollectionService {

  private database: Datastore;
  constructor(private databaseService: DatabaseService) {}

  createMusicCollection(musicCollection: MusicCollection, errorWhenExists: Boolean = true): Promise<MusicCollection> {
    return new Promise((resolve, reject) => {
      return this.getMusicCollectionByName(musicCollection.name)
        .then((musicCollectionFound: MusicCollection) => {
          if (!musicCollectionFound) {
            return this.databaseService.insert(DatabaseEnum.musicCollections.toString(), musicCollection)
              .then((data: MusicCollection) => resolve(data))
              .catch((err) => reject(err));
          }
          else if (errorWhenExists)
            reject(new Error("Already exists a music collection with this name."));
          else
            resolve(musicCollectionFound);
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

  remove(musicCollectionId: String): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.databaseService.remove(DatabaseEnum.musicCollections.toString(), { _id: musicCollectionId }, false)
        .then(() => {
          return this.removeAllMusics(musicCollectionId)
            .then(() => resolve())
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }

  removeAllMusics(musicCollectionId: String): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.databaseService.remove(DatabaseEnum.musics.toString(), { musicCollectionId: musicCollectionId })
        .then((removed) => resolve(removed))
        .catch((err) => reject(err));
    });
  }

  importCristianHarp(): Promise<MusicCollection> {
    return new Promise((resolve, reject) => {
      return this.createMusicCollection(new MusicCollection(environment.cristianHarpName, environment.cristianHarpInformations), false)
        .then((musicCollection: MusicCollection) => {
          return this.removeAllMusics(musicCollection._id)
            .then(() => {
              let musicLetters: Array<MusicLetter> = (<any>christianHarp);
          
              for (let music of musicLetters) {
                music.musicCollectionId = musicCollection._id;
                this.databaseService.insert(DatabaseEnum.musics.toString(), music);
              }

              resolve(musicCollection);
            })
            .catch((err) => reject(err));
        })
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
