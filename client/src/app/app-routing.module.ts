import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "kitchen", loadChildren: () => import('./kitchen/kitchen.module').then(m => m.KitchenModule) },
  { path: "orders", loadChildren: () => import("./order/order.module").then(m => m.OrderModule) },
  { path: "tables", loadChildren: () => import("./table/table.module").then(m => m.TableModule) },
  { path: "menu", loadChildren: () => import("./menu/menu.module").then(m => m.MenuModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
