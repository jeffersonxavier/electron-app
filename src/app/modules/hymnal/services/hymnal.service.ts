import { Injectable } from '@angular/core';
import { Database } from '../enums';
import { Hymnal } from '../models';
import { DatabaseService } from '../../../services';
import * as Datastore from 'nedb';

@Injectable()
export class HymnalService {

  private database: Datastore;
  constructor(private databaseService: DatabaseService) {}

  createHymnal(hymnal: Hymnal) {
    this.databaseService.insert(Database.hymnals.toString(), hymnal)
      .then((res) => {
        console.log('then.....');
        console.log(res);
      })
      .catch((err) => {
        console.log('catch.....')
        console.log(err);
      });
  }
}
