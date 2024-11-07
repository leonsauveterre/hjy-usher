import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client404Component } from './client-404.component';

// https://httpwg.org/specs/rfc9110.html#overview.of.status.codes
describe('Client404Component', () => {
  let component: Client404Component;
  let fixture: ComponentFixture<Client404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Client404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Client404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
