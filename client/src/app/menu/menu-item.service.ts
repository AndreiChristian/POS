import { Injectable } from '@angular/core';
import { CRUDService } from '../models/crudService';
import { MenuItemRecord } from '../models/models';
import { Observable, from } from 'rxjs';
import PocketBase from 'pocketbase';
import { PocketbaseService } from '../core/pocketbase.service';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService implements CRUDService<MenuItemRecord> {

  private pb: PocketBase

  constructor(private pbService: PocketbaseService) {
    this.pb = pbService.getPB()
  }

  getAll(): Observable<MenuItemRecord[]> {
    return from(this.pb.collection("MenuItem").getFullList<MenuItemRecord>())
  }

  getAllByCategoryId(categoryId: string): Observable<MenuItemRecord[]> {
    console.log(categoryId)
    return from(this.pb.collection("MenuItem").getFullList<MenuItemRecord>(
      {
        filter: `CategoryId = '${categoryId}'`
      }
    ))
  }

  getOne(id: string): Observable<MenuItemRecord> {
    return from(this.pb.collection("MenuItem").getOne<MenuItemRecord>(id))
  }

  create(t: MenuItemRecord): Observable<MenuItemRecord> {
    return from(this.pb.collection("MenuItem").create<MenuItemRecord>(t))
  }

  update(id: string, t: MenuItemRecord): Observable<MenuItemRecord> {
    return from(this.pb.collection('MenuItem').update<MenuItemRecord>(id, t))
  }

  delete(id: string): Observable<boolean> {
    return from(this.pb.collection('MenuItem').delete(id))
  }



}
