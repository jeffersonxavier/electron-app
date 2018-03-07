import { Injectable } from '@angular/core';
import { Database } from '../enums';
import * as Datastore from 'nedb';
import { resolve } from 'path';

@Injectable()
export class DatabaseService {

  private database: Datastore;

  constructor() {}

  insert(database: Database, item: any) : Promise<any> {
    this.database = this.getDatabase(database);

    return new Promise((resolve, reject) => {
      return this.database.insert(item, (err, newItem) => {
        if (err)
          reject(err);
        else
          resolve(newItem);
      });
    });
  }

  private getDatabase(database: Database) {
    return new Datastore({
      filename: database.toString(),
      autoload: true
    });
  }
}
