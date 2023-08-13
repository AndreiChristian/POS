import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCreateDialogComponent } from './components/table-create-dialog/table-create-dialog.component';
import { TableDeleteDialogComponent } from './components/table-delete-dialog/table-delete-dialog.component';
import { TableUpdateDialogComponent } from './components/table-update-dialog/table-update-dialog.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';

const tablesRoutes: Routes = [
  { path: "", component: ContainerComponent}
]

@NgModule({
  declarations: [
    TableCreateDialogComponent,
    TableDeleteDialogComponent,
    TableUpdateDialogComponent,
    TableListComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tablesRoutes),
    MaterialModule,

  ]
})
export class TableModule { }
