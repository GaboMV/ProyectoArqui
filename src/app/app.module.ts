import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";
import { RegistroComponent } from './view/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistroVehiculosComponent } from './view/registro-vehiculos/registro-vehiculos.component';
import { RegistroEstadiaComponent } from './view/registro-estadia/registro-estadia.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ListaUsuariosComponent } from './view/lista-usuarios/lista-usuarios.component';
import { ListaEstadiaComponent } from './view/lista-estadia/lista-estadia.component';
import { ListaVehiculosComponent } from './view/lista-vehiculos/lista-vehiculos.component';
import { ListaIngresoComponent } from './view/lista-ingreso/lista-ingreso.component';
import { NavbarComponent } from './view/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    RegistroVehiculosComponent,
    RegistroEstadiaComponent,
    ListaUsuariosComponent,
    ListaEstadiaComponent,
    ListaVehiculosComponent,
    ListaIngresoComponent,
    NavbarComponent,


  ],
  imports: [
    BrowserAnimationsModule, HammerModule, NgxMaterialTimepickerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
