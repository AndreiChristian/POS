import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCreateDialogComponent } from './components/table-create-dialog/table-create-dialog.component';
import { TableDeleteDialogComponent } from './components/table-delete-dialog/table-delete-dialog.component';
import { TableUpdateDialogComponent } from './components/table-update-dialog/table-update-dialog.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule, Routes } from '@angular/router';

const tablesRoutes: Routes = [
  { path: "", component: TableListComponent }
]

@NgModule({
  declarations: [
    TableCreateDialogComponent,
    TableDeleteDialogComponent,
    TableUpdateDialogComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(tablesRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class TableModule { }
