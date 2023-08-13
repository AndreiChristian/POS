import { Injectable } from '@angular/core';
import PocketBase, { Record } from 'pocketbase';
import { Observable, from } from 'rxjs';
import { PocketbaseService } from '../core/pocketbase.service';
import { TableRecord } from '../models/models';
import { CRUDService } from '../models/crudService';



@Injectable({
  providedIn: 'root'
})
export class TableService implements CRUDService<TableRecord> {

  private pb: PocketBase

  constructor(pbService: PocketbaseService) {
    this.pb = pbService.getPB()
  }

  getOne(id: string): Observable<TableRecord> {
    return from(this.pb.collection('Table').getOne<TableRecord>(id))
  }

  getAll(): Observable<TableRecord[]> {
    return from(this.pb.collection("Table").getFullList<TableRecord>())
  }

  delete(id: string): Observable<boolean> {
    return from(this.pb.collection('Table').delete('RECORD_ID'))
  }

  create(t: TableRecord): Observable<TableRecord> {
    return from(this.pb.collection('Table').create<TableRecord>(t));
  }

  update(id: string, table: TableRecord): Observable<TableRecord> {
    return from(this.pb.collection('Table').update<TableRecord>('RECORD_ID', table));
  }

}
