import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotuloilComponent } from './motuloil.component';

describe('MotuloilComponent', () => {
  let component: MotuloilComponent;
  let fixture: ComponentFixture<MotuloilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotuloilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotuloilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
