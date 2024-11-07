import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesGuidanceComponent } from './utilities-guidance.component';

describe('GuidanceComponent', () => {
  let component: UtilitiesGuidanceComponent;
  let fixture: ComponentFixture<UtilitiesGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitiesGuidanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilitiesGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
