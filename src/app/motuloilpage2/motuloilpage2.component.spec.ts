import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Motuloilpage2Component } from './motuloilpage2.component';

describe('Motuloilpage2Component', () => {
  let component: Motuloilpage2Component;
  let fixture: ComponentFixture<Motuloilpage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Motuloilpage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Motuloilpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
