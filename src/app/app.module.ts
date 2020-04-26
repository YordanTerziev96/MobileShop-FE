import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehiclesService } from './services/vehicles.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SelectedVehicleComponent } from './selected-vehicle/selected-vehicle.component';
import { PopupComponent } from './popup/popup.component';
import { SearchComponent } from './search/search.component';
import { RegistrationComponent } from './registration/registration.component';
import { FiltredVehiclesComponent } from './filtred-vehicles/filtred-vehicles.component';
import { UserService } from './services/users.service';
import { LoginComponent } from './login/login.component';
import { GlobalVariable } from './global_variable';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    SelectedMovieComponent,
    AboutComponent,
    VehicleComponent,
    VehicleFormComponent,
    VehiclesComponent,
    SelectedVehicleComponent,
    PopupComponent,
    SearchComponent,
    RegistrationComponent,
    FiltredVehiclesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: VehiclesComponent},
      {path: 'movie/:id', component: SelectedMovieComponent},
      {path: 'add', component: AboutComponent},
      {path: 'vehicles', component: VehiclesComponent},
      {path: 'vehicle/:id', component: SelectedVehicleComponent},
      {path: 'search', component: SearchComponent},
      {path: 'register', component: RegistrationComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [ MoviesService, VehiclesService, UserService, GlobalVariable ],
  bootstrap: [AppComponent]
})
export class AppModule { }
