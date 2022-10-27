import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistroService} from "../../service/registro.service";
import {UserModel} from "../../model/registro";
import {UserModel1} from "../../model/estadia";

import Swal from 'sweetalert2'
import {EstadiaService} from "../../service/estadia.service";
@Component({
  selector: 'app-lista-estadia',
  templateUrl: './lista-estadia.component.html',
  styleUrls: ['./lista-estadia.component.css']
})


export class ListaEstadiaComponent implements OnInit {
  Usuarios : UserModel1[] = []
  ue:UserModel1 = new UserModel1()
  constructor(private router: Router,private route:ActivatedRoute, private estadia: EstadiaService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }
  getUsuarios(){
    this.estadia.getUsuarios().subscribe(
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
        this.estadia.delete(id).subscribe(data=>{
          console.log(data);

        });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

  alertaedit(usuarioe: UserModel1){
    this.ue=usuarioe
  }
  saveEditedUser(){
    this.estadia.edit(this.ue).subscribe(
      data =>{
        console.log(data)
      }
    )
  }
}
