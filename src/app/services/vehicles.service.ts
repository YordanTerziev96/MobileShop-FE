import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { Vehicles } from '../models/vehicles';
import { VehicleDTO } from '../models/vehicleDTO';
import { User } from '../models/user';

const HttpUploadOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json' })
  };

@Injectable()
export class VehiclesService {

  private vehicleUrl: string;
  private vehicleGetUrl: string;
  private brandsUrl: string;
  private categoriesUrl: string;
  private enginesUrl: string;
  private gearboxUrl: string;
  private typesUrl: string;
  private modelsUrl: string;
  private extrasUrl: string;
  private imageUploadUrl: string;
  private imagesUrl: string;
  private getVehicleUrl: string;
  private filterVehicle: string;
  private regionsUrl: string;
  private bindingUrl: string;
  private getUserUrl: string;


  constructor(private http: HttpClient) {
    this.vehicleUrl = 'http://localhost:8080/addVehicle';
    this.vehicleGetUrl = 'http://localhost:8080/allVehicles';
    this.brandsUrl = 'http://localhost:8080/brands';
    this.categoriesUrl = 'http://localhost:8080/categories';
    this.enginesUrl = 'http://localhost:8080/engines';
    this.gearboxUrl = 'http://localhost:8080/gearboxes';
    this.typesUrl = 'http://localhost:8080/types';
    this.modelsUrl = 'http://localhost:8080/models?brandName=';
    this.extrasUrl = 'http://localhost:8080/allExtras';
    this.imageUploadUrl = 'http://localhost:8080/rest/upload?vehicleID=';
    this.imagesUrl = 'http://localhost:8080/getImages?vehicleId=';
    this.getVehicleUrl = 'http://localhost:8080/getVehicle?vehicleId=';
    this.filterVehicle = 'http://localhost:8080/filterVehicles';
    this.regionsUrl = 'http://localhost:8080/regions';
    this.bindingUrl = 'http://localhost:8080/bindUser?vehicleId=';
    this.getUserUrl = 'http://localhost:8080/getUserByVehicleId?vehicleId=';

  }

  public findAll(): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.vehicleGetUrl);
  }

  public getVehicleImages(vehicleId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.imagesUrl}${vehicleId}`);
  }

  public getVehicle(vehicleId: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.getVehicleUrl}${vehicleId}`);
  }

  public getUserByVehicleId(vehicleId: number): Observable<User> {
    return this.http.get<User>(`${this.getUserUrl}${vehicleId}`);
  }

  public bindUserToVehicle(vehicleId: number, userId: number): Observable<String> {
    return this.http.get<String>(`${this.bindingUrl}${vehicleId}${'&userId='}${userId}`);
  }

  public saveVehicle(vehicle: Vehicle): Observable<Vehicle> {
      console.log(vehicle);
    return this.http.post<Vehicle>(this.vehicleUrl, vehicle);
  }

  public filterVehicles(vehicleDto: VehicleDTO): Observable<Vehicles> {
      return this.http.post<Vehicles>(this.filterVehicle, vehicleDto);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
}

  public getBrands(): Observable<string[]> {
    return this.http.get<string[]>(this.brandsUrl);
  }

  public getExtras(): Observable<string[]> {
    return this.http.get<string[]>(this.extrasUrl);
  }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.categoriesUrl);
  }

  public getEngines(): Observable<string[]> {
    return this.http.get<string[]>(this.enginesUrl);
  }

  public getGearboxes(): Observable<string[]> {
    return this.http.get<string[]>(this.gearboxUrl);
  }

  public getTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.typesUrl);
  }

  public getRegions(): Observable<string[]> {
    return this.http.get<string[]>(this.regionsUrl);
  }

  public getModels(brandName: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.modelsUrl}${brandName}`);
  }

  public uploadImage(vehicleID: string, file: any): Observable<string[]> {
    return this.http.post<string[]>(`${this.imageUploadUrl}${vehicleID}`, file, HttpUploadOptions);
  }

}
