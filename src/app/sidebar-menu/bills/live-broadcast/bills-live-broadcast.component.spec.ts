import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsLiveBroadcastComponent } from './bills-live-broadcast.component';

describe('LiveBroadcastComponent', () => {
  let component: BillsLiveBroadcastComponent;
  let fixture: ComponentFixture<BillsLiveBroadcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillsLiveBroadcastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsLiveBroadcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
