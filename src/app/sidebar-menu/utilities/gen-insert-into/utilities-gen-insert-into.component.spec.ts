import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesGenInsertIntoComponent } from './utilities-gen-insert-into.component';

describe('GenInsertIntoComponent', () => {
  let component: UtilitiesGenInsertIntoComponent;
  let fixture: ComponentFixture<UtilitiesGenInsertIntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitiesGenInsertIntoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilitiesGenInsertIntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
