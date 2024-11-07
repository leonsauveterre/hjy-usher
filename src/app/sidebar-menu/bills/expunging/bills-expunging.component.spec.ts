import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsExpungingComponent } from './bills-expunging.component';

describe('ExpungingComponent', () => {
  let component: BillsExpungingComponent;
  let fixture: ComponentFixture<BillsExpungingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsExpungingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsExpungingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
