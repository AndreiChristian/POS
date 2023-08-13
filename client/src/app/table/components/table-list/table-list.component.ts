import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableListDataSource, } from './table-list-datasource';
import { TableService } from '../../table.service';
import { TableRecord } from 'src/app/models/models';
import { MatDialog } from '@angular/material/dialog';
import { TableDeleteDialogComponent } from '../table-delete-dialog/table-delete-dialog.component';
import { TableDialogService } from '../../table-dialog.service';



@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableRecord>;
  @Input() tableData: TableRecord[] = []

  private selectedTable: TableRecord | null = null

  dataSource!: TableListDataSource

  displayedColumns = ['number', 'available', 'persons', 'actions'];

  constructor(private tablesService: TableService, private tableDialogService: TableDialogService) {
  }

  ngOnInit(): void {
    this.dataSource = new TableListDataSource(this.tableData);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  selectTable(table: TableRecord) {
    this.selectedTable = table
  }

  delete() {
    this.tableDialogService.openDeleteDialog(this.selectedTable!)
  }

  update() {
    this.tableDialogService.openUpdateDialog(this.selectedTable!)
  }
}
