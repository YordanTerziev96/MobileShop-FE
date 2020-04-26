import { Component, OnInit, Input } from '@angular/core';
import { Vehicles } from '../models/vehicles';

@Component({
  selector: 'app-filtred-vehicles',
  templateUrl: './filtred-vehicles.component.html',
  styleUrls: ['./filtred-vehicles.component.css']
})
export class FiltredVehiclesComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('vehicles') vehicles: Vehicles;
  constructor() { }

  ngOnInit() {
    console.log(this.vehicles);
  }

}
