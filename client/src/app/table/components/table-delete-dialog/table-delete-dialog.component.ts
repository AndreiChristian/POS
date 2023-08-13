import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRecord } from 'src/app/models/models';
import { TableService } from '../../table.service';

@Component({
  selector: 'app-table-delete-dialog',
  templateUrl: './table-delete-dialog.component.html',
  styleUrls: ['./table-delete-dialog.component.css']
})
export class TableDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableRecord, private tableService: TableService) { }

  ngOnInit(): void {
    console.table(this.data)
  }

  delete() {
    this.tableService.delete(this.data.id!)
  }
}
