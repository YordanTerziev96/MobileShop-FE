import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedVehicleComponent } from './selected-vehicle.component';

describe('SelectedVehicleComponent', () => {
  let component: SelectedVehicleComponent;
  let fixture: ComponentFixture<SelectedVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
