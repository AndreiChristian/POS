import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {

  private pb = new PocketBase('http://127.0.0.1:8090');

  getPB(): PocketBase {
    return this.pb;
  }

  constructor() { }
}
