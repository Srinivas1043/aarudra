import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AarudrahomeComponent } from './aarudrahome.component';

describe('AarudrahomeComponent', () => {
  let component: AarudrahomeComponent;
  let fixture: ComponentFixture<AarudrahomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AarudrahomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AarudrahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
