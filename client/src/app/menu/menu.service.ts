import { Injectable } from '@angular/core';
import { CRUDService } from '../models/crudService';
import { BehaviorSubject, Observable } from 'rxjs';

export interface MenuItem {
  id: string
  name: string,
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private ListSubject: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>([])
  public all$: Observable<MenuItem[]> = this.ListSubject.asObservable()

  private IndividualSubject: BehaviorSubject<MenuItem | null> = new BehaviorSubject<MenuItem | null>(null)
  public one$: Observable<MenuItem | null> = this.IndividualSubject.asObservable()

  constructor() { }

  // getAll(): Observable<MenuItem[]> {

  // }

  // getOne(id: string): Observable<MenuItem> {

  // }

  // create(t: MenuItem): Observable<MenuItem> {

  // }

  // update(id: string, t: MenuItem): Observable<MenuItem> {

  // }

  // delete(id: string): Observable<boolean> {

  // }


}
