import { Component, OnInit } from '@angular/core';
import { Record } from 'pocketbase';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders$!: Observable<Record[]>

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.subscribeToOrders()
    this.orders$ = this.orderService.orders$
    this.orders$.subscribe(data => console.log(data))
  }

}
