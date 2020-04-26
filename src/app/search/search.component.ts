import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { Vehicle } from '../models/vehicle';
import { VehicleDTO } from '../models/vehicleDTO';
import { Vehicles } from '../models/vehicles';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  vehicle: Vehicle;
  vehicleDTO: VehicleDTO;
  brands: string[];
  models: string[];
  types: string[];
  categories: string[];
  engines: string[];
  gearboxes: string[];
  extras: string[];
  selectedExtras = new Array<string>();
  extrasMap = new Map<string, boolean>();
  vehicles: Vehicles;
  isClicked: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehiclesService) {
    this.vehicle = new Vehicle();
    this.vehicleDTO = new VehicleDTO();
  }

  ngOnInit() {
    this.isClicked = false;
    this.vehicleDTO.engineType = '';
    this.vehicleDTO.fromPrice = '';
    this.vehicleDTO.gearboxType = '';
    this.vehicleDTO.hpFrom = '';
    this.vehicleDTO.hpTo = '';
    this.vehicleDTO.model = '';
    this.vehicleDTO.region = '';
    this.vehicleDTO.toPrice = '';
    this.vehicleDTO.type = '';
    this.vehicleDTO.yearFrom = '';
    this.vehicleDTO.yearTo = '';
    this.vehicleDTO.brand = '';
    this.vehicleDTO.categoryType = '';
    this.vehicleService.getBrands().subscribe(data => {
      this.brands = data;
    });

    this.vehicleService.getTypes().subscribe(data => {
      this.types = data;
    });

    this.vehicleService.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.vehicleService.getEngines().subscribe(data => {
      this.engines = data;
    });

    this.vehicleService.getGearboxes().subscribe(data => {
      this.gearboxes = data;
    });

    this.vehicleService.getExtras().subscribe(data => {
      this.extras = data;
      for (let i = 0; i < data.length; i++) {
        this.extrasMap[data[i]] = false;
      }
      console.log(this.extrasMap);
    });
  }

  onSelect(brandName: string) {
    this.vehicleService.getModels(brandName.substring(3)).subscribe(data => {
      this.models = data;
    });
  }

  updateCheckedExtras(extra, event) {
    this.extrasMap[extra] = event.target.checked;
 }

  updateExtras(): void {
  for (const extra in this.extrasMap) {
      if (this.extrasMap[extra]) {
          this.selectedExtras.push(extra);

      }
    }
    console.log(this.selectedExtras);
  }

  onSearch() {
    this.updateExtras();
    this.vehicleDTO.extras = this.selectedExtras;
    this.vehicleService.filterVehicles(this.vehicleDTO).subscribe(data => {
        this.vehicles = data;
        console.log(data);
    });
    console.log(this.vehicleDTO);
    this.selectedExtras = [];
    this.isClicked = true;
  }

}
