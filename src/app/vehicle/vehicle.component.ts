import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { DomSanitizer } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  images: string[];
  domSanitizer: DomSanitizer;
  imageUrl: any;

  // tslint:disable-next-line:no-input-rename
  @Input('vehicle') vehicle: Vehicle;
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    console.log(this.vehicle.id);
    console.log(this.vehicle);
    this.vehiclesService.getVehicleImages(this.vehicle.id).subscribe(data => {
      this.images = data;
      console.log(data[0]);
      this.concatUrl(data[0]);
    });
  }

  dataURItoBlob(dataURI) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: 'image/jpeg' });
    return blob;
 }
 concatUrl(imageURL: any) {
  this.imageUrl = 'data:image/png;base64,' + stringify(imageURL);
  console.log(this.imageUrl);
 }

}
