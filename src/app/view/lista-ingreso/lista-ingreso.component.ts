import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IngresoService} from "../../service/ingreso.service";
import {RegistroService} from "../../service/registro.service";

import {ingresoModel} from "../../model/Ingreso";
import {UserModel} from "../../model/registro";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-ingreso',
  templateUrl: './lista-ingreso.component.html',
  styleUrls: ['./lista-ingreso.component.css']
})

export class ListaIngresoComponent implements OnInit {
  Usuarios : ingresoModel[] = []
  Usuarios2 : UserModel[] = []

  constructor(private router: Router,private route:ActivatedRoute, private usuarios:IngresoService, private usuarios2:RegistroService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.usuarios.getUsuarios().subscribe(
      data => {
        this.Usuarios=data;

      }
    )
    this.usuarios2.getUsuarios().subscribe(
      data => {
        this.Usuarios2=data;

      }
    )

  }
  alertaelim(){
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguroa de eliminar a estea usuario/a?',
      showConfirmButton: true,
      confirmButtonText: 'ELIMINAR',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonText: 'CANCELAR',
      cancelButtonColor: '#d33',
      buttonsStyling: true,
    })
  }

  alertaedit(){
    Swal.fire({
      icon: 'success',
      title: '¿Edicion exitosa',
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',

      buttonsStyling: true,
    })
  }

}
