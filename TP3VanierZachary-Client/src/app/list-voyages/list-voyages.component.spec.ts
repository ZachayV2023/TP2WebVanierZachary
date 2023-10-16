import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVoyagesComponent } from './list-voyages.component';

describe('ListVoyagesComponent', () => {
  let component: ListVoyagesComponent;
  let fixture: ComponentFixture<ListVoyagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVoyagesComponent]
    });
    fixture = TestBed.createComponent(ListVoyagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
