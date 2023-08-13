import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableListDataSource, } from './table-list-datasource';
import { TableService } from '../../table.service';
import { TableRecord } from 'src/app/models/models';



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

  dataSource!: TableListDataSource

  displayedColumns = ['id', 'name'];

  constructor(private tablesService: TableService) {
  }

  ngOnInit(): void {
    this.dataSource = new TableListDataSource(this.tableData);
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
