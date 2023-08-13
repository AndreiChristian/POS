import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuCategoryIndvidualComponent } from './components/menu-category-indvidual/menu-category-indvidual.component';
import { MaterialModule } from '../material/material.module';
import { MenuCategoryListComponent } from './components/menu-category-list/menu-category-list.component';
import { AppLayoutModule } from '../layout/layout.module';
import { MenuItemListComponent } from './components/menu-item-list/menu-item-list.component';
import { AllMenuItemsComponent } from './components/all-menu-items/all-menu-items.component';

const menuRoutes: Routes = [
  {
    path: "", component: MenuCategoryListComponent, children: [
      { path: "", component: AllMenuItemsComponent },
      { path: ":id", component: MenuCategoryIndvidualComponent }
    ]
  }
]

@NgModule({
  declarations: [
    MenuCategoryListComponent,
    MenuCategoryIndvidualComponent,
    MenuItemListComponent,
    AllMenuItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes),
    MaterialModule,
    AppLayoutModule
  ]
})
export class MenuModule { }
