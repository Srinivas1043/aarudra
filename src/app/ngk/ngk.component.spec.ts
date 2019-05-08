import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgkComponent } from './ngk.component';

describe('NgkComponent', () => {
  let component: NgkComponent;
  let fixture: ComponentFixture<NgkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
