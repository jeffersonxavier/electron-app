import { Injectable } from '@angular/core';
import * as Datastore from 'nedb';

@Injectable()
export class DatabaseService {

  private database: Datastore;
  private lastDatabaseName: string;
  constructor() {}

  insert(databaseName: string, item: any) : Promise<any> {
    this.getDatabase(databaseName);

    return new Promise((resolve, reject) => {
      return this.database.insert(item, (err, newItem) => {
        if (err)
          reject(err);
        else
          resolve(newItem);
      });
    });
  }

  find(databaseName: string, query: Object, oneResult: Boolean = false): Promise<any> {
    this.getDatabase(databaseName);

    return new Promise((resolve, reject) => {
      if (oneResult) {
        return this.database.findOne(query, (err, item) => {
          if (err)
            reject(err);
          else
            resolve(item);
        });
      }
      else {
        return this.database.find(query, (err, items) => {
          if (err)
            reject(err);
          else
            resolve(items);
        });
      }
    });
  }

  remove(databaseName: string, query: Object, multi: boolean = true): Promise<any> {
    this.getDatabase(databaseName);

    return new Promise((resolve, reject) => {
      return this.database.remove(query, { multi: multi }, (err, removed) => {
        if (err)
            reject(err);
          else
            resolve(removed);
      });
    });
  }

  private getDatabase(databaseName: string) {
    if (!this.database || databaseName != this.lastDatabaseName) {
      this.database = new Datastore({
        filename: databaseName,
        autoload: true
      });
      
      this.lastDatabaseName = databaseName;
    }
  }
}
