import { Injectable } from '@angular/core';
import { TableService } from './table.service';
import { TableRecord } from '../models/models';
import { MatDialog } from '@angular/material/dialog';
import { TableDeleteDialogComponent } from './components/table-delete-dialog/table-delete-dialog.component';
import { TableCreateDialogComponent } from './components/table-create-dialog/table-create-dialog.component';
import { TableUpdateDialogComponent } from './components/table-update-dialog/table-update-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TableDialogService {

  private dialogSizeConfigs = {
    width: "70vw",
    height: "70vh",
  }

  constructor(private tableService: TableService, public dialog: MatDialog) { }

  openDeleteDialog(table: TableRecord) {
    this.dialog.open(TableDeleteDialogComponent, {
      data: table,
      ...this.dialogSizeConfigs
    })
  }

  openCreateDialog() {
    this.dialog.open(TableCreateDialogComponent, {
      ...this.dialogSizeConfigs
    }
    )
  }

  openUpdateDialog(table: TableRecord) {
    this.dialog.open(TableUpdateDialogComponent, {
      data: table,
      ...this.dialogSizeConfigs
    })
  }
}
