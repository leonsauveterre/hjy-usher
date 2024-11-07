import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersAboutComponent } from './others-about.component';

describe('AboutComponent', () => {
  let component: OthersAboutComponent;
  let fixture: ComponentFixture<OthersAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
