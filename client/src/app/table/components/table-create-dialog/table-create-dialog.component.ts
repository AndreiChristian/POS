import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableRecord } from 'src/app/models/models';
import { TableService } from '../../table.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-create-dialog',
  templateUrl: './table-create-dialog.component.html',
  styleUrls: ['./table-create-dialog.component.css']
})
export class TableCreateDialogComponent {

  tableForm: FormGroup;

  constructor(private tableService: TableService, private fb: FormBuilder) {
    this.tableForm = this.fb.group({
      available: [true],
      maxPersons: [5],
      number: [0]
    });
  }





  create() {
    const tableData = this.tableForm.value;
    console.log(tableData);
    this.tableService.create({
      number:tableData.number,
      maxPersons:tableData.maxPersons,
      available:tableData.available
    })
  }

}
