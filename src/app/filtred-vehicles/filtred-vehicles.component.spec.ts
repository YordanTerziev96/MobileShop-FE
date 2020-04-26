import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltredVehiclesComponent } from './filtred-vehicles.component';

describe('FiltredVehiclesComponent', () => {
  let component: FiltredVehiclesComponent;
  let fixture: ComponentFixture<FiltredVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltredVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltredVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
