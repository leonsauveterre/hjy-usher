import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesRawRetrievalComponent } from './utilities-raw-retrieval.component';

describe('UtilitiesRawRetrievalComponent', () => {
  let component: UtilitiesRawRetrievalComponent;
  let fixture: ComponentFixture<UtilitiesRawRetrievalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilitiesRawRetrievalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilitiesRawRetrievalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
