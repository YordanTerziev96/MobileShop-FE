import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../models/vehicles';
import { VehiclesService } from '../services/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicles;

  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService.findAll().subscribe(data => {
      this.vehicles = data;
      console.log(data);
    });
  }

}
