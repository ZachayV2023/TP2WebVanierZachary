import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVoyageComponent } from './delete-voyage.component';

describe('DeleteVoyageComponent', () => {
  let component: DeleteVoyageComponent;
  let fixture: ComponentFixture<DeleteVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteVoyageComponent]
    });
    fixture = TestBed.createComponent(DeleteVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
