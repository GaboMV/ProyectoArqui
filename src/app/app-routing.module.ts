import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./view/login/login.component";
import {RegistroComponent} from "./view/registro/registro.component";
import {RegistroVehiculosComponent} from "./view/registro-vehiculos/registro-vehiculos.component";
import {RegistroEstadiaComponent} from "./view/registro-estadia/registro-estadia.component";
import {ListaUsuariosComponent} from "./view/lista-usuarios/lista-usuarios.component";
import {ListaEstadiaComponent} from "./view/lista-estadia/lista-estadia.component";
import {ListaVehiculosComponent} from "./view/lista-vehiculos/lista-vehiculos.component";
import {ListaIngresoComponent} from "./view/lista-ingreso/lista-ingreso.component";
import {NavbarComponent} from "./view/navbar/navbar.component";

const routes: Routes = [
  {path:'registro',
  component: RegistroComponent
  },
  {path:'',
    component: LoginComponent, pathMatch:'full'
  },
  {path:'registro-vehiculo',
    component: RegistroVehiculosComponent
  },
  {path:'registro-estadia',
    component: RegistroEstadiaComponent
  },
  {path:'lista-personal',
    component: ListaUsuariosComponent
  },

  {path:'lista-estadia',
    component: ListaEstadiaComponent
  },
  {path:'lista-vehiculo',
    component: ListaVehiculosComponent
  },
  {path:'lista-ingreso',
    component: ListaIngresoComponent
  },
  {path:'navbar',
    component: NavbarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
