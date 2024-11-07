import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsLogsComponent } from './bills-logs.component';

describe('LogsComponent', () => {
  let component: BillsLogsComponent;
  let fixture: ComponentFixture<BillsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsLogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
