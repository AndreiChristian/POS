import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryIndvidualComponent } from './menu-category-indvidual.component';

describe('MenuCategoryIndvidualComponent', () => {
  let component: MenuCategoryIndvidualComponent;
  let fixture: ComponentFixture<MenuCategoryIndvidualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryIndvidualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCategoryIndvidualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
