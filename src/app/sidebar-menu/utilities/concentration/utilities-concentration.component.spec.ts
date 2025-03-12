import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesConcentrationComponent } from './utilities-concentration.component';

describe('UtilitiesConcentrationComponent', () => {
  let component: UtilitiesConcentrationComponent;
  let fixture: ComponentFixture<UtilitiesConcentrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitiesConcentrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilitiesConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
