import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistroVehiculoService} from "../../service/registroVehiculo.service";
import {vehiculoModel} from "../../model/vehiculo";
import Swal from 'sweetalert2'
import {UserModel} from "../../model/registro";
@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})

export class ListaVehiculosComponent implements OnInit {
  Usuarios : vehiculoModel[] = []
  ue:vehiculoModel = new vehiculoModel()

  constructor(private router: Router,private route:ActivatedRoute, private usuarios: RegistroVehiculoService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.usuarios.getUsuarios().subscribe(
      data => {
        this.Usuarios=data;

      }
    )

  }
  alertaelim( id: number){
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
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.usuarios.delete(id).subscribe(data=>{
          console.log(data);

        });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

  alertaedit(usuarioe: vehiculoModel){
    this.ue=usuarioe
  }
  saveEditedUser(){
    this.usuarios.edit(this.ue).subscribe(
      data =>{
        console.log(data)
      }
    )
  }
}
