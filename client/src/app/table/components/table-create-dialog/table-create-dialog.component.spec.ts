import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCreateDialogComponent } from './table-create-dialog.component';

describe('TableCreateDialogComponent', () => {
  let component: TableCreateDialogComponent;
  let fixture: ComponentFixture<TableCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCreateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
