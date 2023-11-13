import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCreateComponent } from './travel-create.component';

describe('TravelCreateComponent', () => {
  let component: TravelCreateComponent;
  let fixture: ComponentFixture<TravelCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelCreateComponent]
    });
    fixture = TestBed.createComponent(TravelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
