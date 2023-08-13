import { Component, OnInit } from '@angular/core';
import { MenuItemService } from '../../menu-item.service';
import { Observable } from 'rxjs';
import { MenuItemRecord } from 'src/app/models/models';

@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.css']
})
export class AllMenuItemsComponent implements OnInit {

  items$!: Observable<MenuItemRecord[]>

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.items$ = this.menuItemService.getAll()
    this.items$.subscribe(data => console.log(data))
  }



}
