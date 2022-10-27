import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistroService} from "../../service/registro.service";
import {UserModel} from "../../model/registro";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
Usuarios : UserModel[] = []
  ue:UserModel = new UserModel()

  constructor(private router: Router,private route:ActivatedRoute, private usuarios: RegistroService) { }

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

  alertaedit(usuarioe: UserModel){
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
