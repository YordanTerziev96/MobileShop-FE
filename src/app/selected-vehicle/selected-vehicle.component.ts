import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../services/vehicles.service';
import { Vehicle } from '../models/vehicle';
import { stringify } from '@angular/compiler/src/util';
import { User } from '../models/user';

@Component({
  selector: 'app-selected-vehicle',
  templateUrl: './selected-vehicle.component.html',
  styleUrls: ['./selected-vehicle.component.css']
})
export class SelectedVehicleComponent implements OnInit {

  public images: string[];
  imageUrl: any;
  public myVehicle: Vehicle;
  public imageSrc: string;
  public user: User;
  constructor(private route: ActivatedRoute, private vehiclesService: VehiclesService) {
    this.user = new User;
  }

  ngOnInit() {
    this.images = new Array();
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.vehiclesService.getVehicle(id).subscribe((selectedVehicle) => {
          this.myVehicle = selectedVehicle;
          this.getVehicleImages(selectedVehicle.id);
          this.user = selectedVehicle.user;
          console.log(selectedVehicle);
      });
      this.vehiclesService.getUserByVehicleId(id).subscribe(data => {
        this.user = data;
        console.log(data);
      });
    });
  }

  getVehicleImages(vehicleId) {
    this.vehiclesService.getVehicleImages(vehicleId).subscribe(data => {
      this.imageSrc = 'data:image/png;base64,' + data[0];
      data.forEach(value => {
          this.concatUrl(value);
      });
    });
  }

  concatUrl(imageURL: any) {
    this.imageUrl = 'data:image/png;base64,' + stringify(imageURL);
    console.log(this.imageUrl);
    this.images.push(this.imageUrl);
   }

   public openNewTab(img: string) {
    this.imageSrc = img;
    console.log(img);
  }

}
