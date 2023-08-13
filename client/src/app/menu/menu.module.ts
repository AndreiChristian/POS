import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuCategoryIndvidualComponent } from './components/menu-category-indvidual/menu-category-indvidual.component';
import { MaterialModule } from '../material/material.module';
import { MenuCategoryListComponent } from './components/menu-category-list/menu-category-list.component';

const menuRoutes: Routes = [
  {
    path: "", component: MenuCategoryListComponent, children: [
      { path: ":id", component: MenuCategoryIndvidualComponent }
    ]
  }
]

@NgModule({
  declarations: [
    MenuCategoryListComponent,
    MenuCategoryIndvidualComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(menuRoutes),
    MaterialModule
  ]
})
export class MenuModule { }
