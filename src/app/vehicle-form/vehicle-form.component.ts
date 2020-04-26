import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../models/vehicle';
import { VehiclesService } from '../services/vehicles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariable } from '../global_variable';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css'],
  providers: [ GlobalVariable ]
})
export class VehicleFormComponent implements OnInit {

  vehicle: Vehicle;
  brands: string[];
  models: string[];
  types: string[];
  regions: string[];
  categories: string[];
  engines: string[];
  gearboxes: string[];
  extras: string[];
  selectedExtras = new Array<string>();
  extrasMap = new Map<string, boolean>();
  selectedFile = null;
  vehicleId: any;
  isSaved: boolean;
  public imagePath;
  imgURL: any;
  public message: string;
  isDone: boolean;

  // // tslint:disable-next-line:no-input-rename
  // @Input('isSuccessful') isSuccessful: boolean;
    // tslint:disable-next-line:no-input-rename
  @Input('userId') userId: any;
  constructor(private route: ActivatedRoute, private router: Router, private vehicleService: VehiclesService,
    public globalVariable: GlobalVariable) {
    this.vehicle = new Vehicle();
   }

  ngOnInit() {
    this.isSaved = false;
    this.isDone = false;

    this.vehicleService.getBrands().subscribe(data => {
      this.brands = data;
      console.log(data);
    });

    this.vehicleService.getTypes().subscribe(data => {
      this.types = data;
    });

    this.vehicleService.getRegions().subscribe(data => {
      this.regions = data;
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

  preview(files) {
    if (files.length === 0) {
      return;
    }
    let mimeType = null;
    mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    let reader = null;
    reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  saveVehicle() {
    this.updateExtras();
    this.vehicle.extras = this.selectedExtras;
    this.vehicleService.saveVehicle(this.vehicle).subscribe(data => {
      this.vehicleId = data;
    });
    this.selectedExtras = [];
  }

  onSelect(brandName: string) {
    console.log(brandName.substring(3));
    this.vehicleService.getModels(brandName.substring(3)).subscribe(data => {
      this.models = data;
      console.log(data);
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

  onFileSelected(event) {
    if (!this.isSaved) {
      this.saveVehicle();
    }
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.vehicleService.uploadImage(this.vehicleId, fd).subscribe(data => {
      console.log(data);
    });
    this.isSaved = true;
    this.isDone = false;
    this.vehicleService.bindUserToVehicle(this.vehicleId, this.userId).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() {
    this.isDone = true;
  }

  newAd() {
    this.isDone = false;
  }

}
