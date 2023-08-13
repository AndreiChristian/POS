import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { RouterModule, Routes } from '@angular/router';

const kitchenRoutes: Routes = [
  { path: "", component: OrdersComponent }
]

@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(kitchenRoutes),
  ]
})
export class KitchenModule { }
