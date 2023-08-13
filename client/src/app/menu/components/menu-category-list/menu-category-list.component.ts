import { Component, OnInit } from '@angular/core';
import { MenuCategoryService } from '../../menu.service';
import { Observable } from 'rxjs';
import { MenuCategoryRecord } from 'src/app/models/models';

@Component({
  selector: 'app-menu-category-list',
  templateUrl: './menu-category-list.component.html',
  styleUrls: ['./menu-category-list.component.css']
})
export class MenuCategoryListComponent implements OnInit {

  menuCategories$!: Observable<MenuCategoryRecord[]>

  constructor(private menuService: MenuCategoryService) { }

  ngOnInit(): void {
    this.menuCategories$ = this.menuService.getAll()
  }

}
