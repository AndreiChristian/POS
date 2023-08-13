import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableService } from '../../table.service';
import { TableRecord } from 'src/app/models/models';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, OnDestroy {

  records: TableRecord[] = [
    {
      id: "",
      number: 4,
      maxPersons: 4,
      available: true,
      collectionId: "",
      collectionName: "",
      created: "",
      updated: ""
    }
  ]

  tableData: TableRecord[] = []
  susbscription!: Subscription

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.susbscription = this.tableService.getAll().subscribe(
      data => {
        console.log(data)
        this.tableData = data
      }
    )
  }

  ngOnDestroy(): void {
    this.susbscription && this.susbscription.unsubscribe()
  }


}
