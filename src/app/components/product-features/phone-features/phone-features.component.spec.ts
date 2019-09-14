import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFeaturesComponent } from './phone-features.component';

describe('PhoneFeaturesComponent', () => {
  let component: PhoneFeaturesComponent;
  let fixture: ComponentFixture<PhoneFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
