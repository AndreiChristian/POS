import { Injectable } from '@angular/core';
import { PocketbaseService } from '../core/pocketbase.service';
import PocketBase, { Record } from 'pocketbase';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private OrderSubject = new BehaviorSubject<Record[]>([])
  public orders$ = this.OrderSubject.asObservable()

  private pb: PocketBase;

  private push<T>(subject: BehaviorSubject<T[]>, value: T) {
    const existingValues = subject.getValue()
    const newValues = [...existingValues, value]
    subject.next(newValues)
  }

  constructor(private pbService: PocketbaseService) {
    this.pb = pbService.getPB()
  }

  getOrders() {
    this.pb.collection("Order").subscribe("*", function (e) {
      console.log(e.record)
    })
  }

  subscribeToOrders(subject = this.OrderSubject, push = this.push) {
    this.pb.collection("Order").subscribe("*", function (e) {
      switch (e.action) {
        case "create":
          push(subject, e.record)
          break;
        case "update":
          console.log("update")
          break;
        case "delete":
          console.log("delete")
          break;
        default:
          console.log("unknown action", e.action)
          break;
      }

      // push<Record>(subject, e.record)
    })
  }

  removeOrder() { }

  postOrder() {
    const data = {
      "name": Math.random()
    };
    this.pb.collection('Order').create(data);

  }

}
