import { BehaviorSubject, Observable } from "rxjs";

export interface CRUDService<T> {

  getAll(): Observable<T[]>
  getOne(id: string): Observable<T>
  create(t: T): Observable<T>
  update(id: string, t: T): Observable<T>
  delete(id: string): Observable<boolean>

}
