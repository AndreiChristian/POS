import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRecord } from 'src/app/models/models';
import { TableService } from '../../table.service';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-update-dialog',
  templateUrl: './table-update-dialog.component.html',
  styleUrls: ['./table-update-dialog.component.css']
})
export class TableUpdateDialogComponent {

  tableForm: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public data: TableRecord, private tableService: TableService, private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      available: [data.available],
      maxPersons: [data.maxPersons],
      number: [data.number]
    });
  }

  update() {
    const tableData = this.tableForm.value
    this.tableService.update(this.data.id!, {
      number: tableData.number,
      maxPersons: tableData.maxPersons,
      available: tableData.available
    })
  }

}
