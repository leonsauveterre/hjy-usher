import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDeclarationsComponent } from './others-declarations.component';

describe('DeclarationsComponent', () => {
  let component: OthersDeclarationsComponent;
  let fixture: ComponentFixture<OthersDeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersDeclarationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersDeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
