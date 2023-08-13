import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  constructor(private orderService: OrderService) { }

  postOrder() {
    this.orderService.postOrder()
  }

}
