import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsManualComponent } from './bills-manual.component';

describe('ManualComponent', () => {
  let component: BillsManualComponent;
  let fixture: ComponentFixture<BillsManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
