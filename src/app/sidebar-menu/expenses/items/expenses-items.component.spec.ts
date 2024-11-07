import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesItemsComponent } from './expenses-items.component';

describe('ItemsComponent', () => {
  let component: ExpensesItemsComponent;
  let fixture: ComponentFixture<ExpensesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
