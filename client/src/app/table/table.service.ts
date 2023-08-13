import { Injectable } from '@angular/core';
import PocketBase, { Record } from 'pocketbase';
import { Observable, from } from 'rxjs';
import { PocketbaseService } from '../core/pocketbase.service';

export interface Table {
  id?: string,
  number: number,
  available: boolean,
  maxPersons: number,
}

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private pb: PocketBase

  constructor(private pbService: PocketbaseService) {
    this.pb = pbService.getPB()
  }

  getOne(id: string): Observable<Table> {
    return from(this.pb.collection('Table').getOne<Table>(id))
  }

  getAll(): Observable<Table[]> {
    return from(this.pb.collection("Table").getFullList<Table>())
  }

  delete(id: string): Observable<boolean> {
    return from(this.pb.collection('Table').delete('RECORD_ID'))
  }

  update(id: string, table: Table): Observable<Table> {
    return from(this.pb.collection('Table').update<Table>('RECORD_ID', table));
  }

}
