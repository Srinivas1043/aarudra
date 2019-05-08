import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MichelinComponent } from './michelin.component';

describe('MichelinComponent', () => {
  let component: MichelinComponent;
  let fixture: ComponentFixture<MichelinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MichelinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MichelinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
