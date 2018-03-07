import { Injectable } from '@angular/core';
import * as Datastore from 'nedb';

@Injectable()
export class DatabaseService {

  private database: Datastore;
  constructor() {}

  insert(databaseName: string, item: any) : Promise<any> {
    this.database = this.getDatabase(databaseName);

    return new Promise((resolve, reject) => {
      return this.database.insert(item, (err, newItem) => {
        if (err)
          reject(err);
        else
          resolve(newItem);
      });
    });
  }

  private getDatabase(databaseName: string) {
    return new Datastore({
      filename: databaseName,
      autoload: true
    });
  }
}
