import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';

const orderRoutes: Routes = [
  { path: "", component: OrderListComponent }
]

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(orderRoutes)
  ]
})
export class OrderModule { }
