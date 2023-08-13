import { Injectable } from '@angular/core';
import { CRUDService } from '../models/crudService';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { MenuCategoryRecord } from '../models/models';
import { PocketbaseService } from '../core/pocketbase.service';
import PocketBase from 'pocketbase';


@Injectable({
  providedIn: 'root'
})
export class MenuCategoryService implements CRUDService<MenuCategoryRecord>  {

  private pb: PocketBase;

  constructor(private pbService: PocketbaseService) {
    this.pb = pbService.getPB()
  }

  getAll(): Observable<MenuCategoryRecord[]> {
    return from(this.pb.collection('MenuCategory').getFullList<MenuCategoryRecord>())
  }

  getOne(id: string): Observable<MenuCategoryRecord> {
    return from(this.pb.collection('MenuCategory').getOne<MenuCategoryRecord>(id))

  }

  create(t: MenuCategoryRecord): Observable<MenuCategoryRecord> {
    return from(this.pb.collection('MenuCategory').create<MenuCategoryRecord>(t))

  }

  update(id: string, t: MenuCategoryRecord): Observable<MenuCategoryRecord> {
    return from(this.pb.collection('MenuCategory').update<MenuCategoryRecord>(id, t))
  }

  delete(id: string): Observable<boolean> {
    return from(this.pb.collection('MenuCategory').delete(id))
  }

}
