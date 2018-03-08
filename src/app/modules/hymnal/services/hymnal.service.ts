import { Injectable } from '@angular/core';
import { Database } from '../enums';
import { Hymnal } from '../models';
import { DatabaseService } from '../../../services';
import * as Datastore from 'nedb';

@Injectable()
export class HymnalService {

  private database: Datastore;
  constructor(private databaseService: DatabaseService) {}

  createHymnal(hymnal: Hymnal): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.getHymnalByName(hymnal.name)
        .then((hymnalFound: Hymnal) => {
          if (!hymnalFound) {
            return this.databaseService.insert(Database.hymnals.toString(), hymnal)
              .then((data) => resolve(data))
              .catch((err) => reject(err));
          }
          else
            reject(new Error("Already exists a hymnal with this name."));
        })
        .catch((err) => reject(err));
    });
  }

  private getHymnalByName(hymnalName: String): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.databaseService.find(Database.hymnals.toString(), { name: hymnalName }, true)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }
}
