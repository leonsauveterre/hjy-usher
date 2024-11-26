import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaveatComponent } from './caveat.component';

describe('CaveatComponent', () => {
  let component: CaveatComponent;
  let fixture: ComponentFixture<CaveatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaveatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaveatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
