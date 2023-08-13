import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../../menu-item.service';
import { Observable, Subscription } from 'rxjs';
import { MenuItemRecord } from 'src/app/models/models';

@Component({
  selector: 'app-menu-category-indvidual',
  templateUrl: './menu-category-indvidual.component.html',
  styleUrls: ['./menu-category-indvidual.component.css']
})
export class MenuCategoryIndvidualComponent implements OnInit, OnDestroy {

  id!: string;
  menuItem$!: Observable<MenuItemRecord[]>
  subscription!: Subscription

  constructor(private route: ActivatedRoute, private menuItemService: MenuItemService) { }

  ngOnInit(): void {
    this.subscription = this.route.paramMap.subscribe(
      data => {
        const id = data.get("id")
        if (id) {
          this.menuItem$ = this.menuItemService.getAllByCategoryId(id)
        } else {
          console.log("no id")
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe()
  }

}
