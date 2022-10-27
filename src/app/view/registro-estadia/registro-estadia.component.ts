import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EstadiaService} from "../../service/estadia.service";
import {UserModel1} from "../../model/estadia";
import {vehiculoModel} from "../../model/vehiculo";
import {UserModel} from "../../model/registro";
@Component({
  selector: 'app-registro-estadia',
  templateUrl: './registro-estadia.component.html',
  styleUrls: ['./registro-estadia.component.css']
})
export class RegistroEstadiaComponent implements OnInit {
  @ViewChild('spinner') spinner: any;
  public id:any;
  userlogin = true;
  userregister = false;

  UserForm: FormGroup = new FormGroup({})
  //Buttons clicks functionalities
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }

  constructor(private router: Router,private route:ActivatedRoute,private estadiaService: EstadiaService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      espacio: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      ingreso: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      salida: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      vehiculo: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      usuario: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      costo: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),

    }, );

  }
  saveUser(){
    let user:UserModel1 = new UserModel1();

    if(this.UserForm.value.password !== this.UserForm.value.repeatedPassword){
      alert("Las contraseñas no coinciden");
      return
    }
    if(this.UserForm === null)
      return

    console.log(this.UserForm.value)
    user.espacio=this.UserForm.value.espacio
    user.ingreso = this.UserForm.value.ingreso;
    user.salida = this.UserForm.value.salida;

    user.idVehiculo.idVehiculo = this.UserForm.value.vehiculo;

    user.idUsuario.idUsuario = this.UserForm.value.usuario;
    user.costo = this.UserForm.value.costo;

    console.log(user)
    this.estadiaService.saveUser(user).subscribe(
      (data:any) => {
        console.log(data);

        alert("Usuario registrado exitosamente");
        this.router.navigateByUrl('/lista-estadia');
      }
    );
  }


}
