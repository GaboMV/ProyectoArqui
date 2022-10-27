import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegistroVehiculoService} from "../../service/registroVehiculo.service";
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {vehiculoModel} from "../../model/vehiculo";

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {
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

  constructor(private router: Router,private route:ActivatedRoute,private registroVehiculoService: RegistroVehiculoService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      placa: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      modelo: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      propietario: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),


    }, );
  }
  saveUser(){
    let user:vehiculoModel = new vehiculoModel();

    if(this.UserForm.value.password !== this.UserForm.value.repeatedPassword){
      alert("Las contraseñas no coinciden");
      return
    }
    if(this.UserForm === null)
      return

    console.log(this.UserForm.value)
    user.placa = this.UserForm.value.placa;

    user.modelo= this.UserForm.value.modelo;

    user.propietario = this.UserForm.value.propietario;
    console.log(user)
    this.registroVehiculoService.saveUser(user).subscribe(
      (data:any) => {
        console.log(data);

        alert("Usuario registrado exitosamente");
        this.router.navigateByUrl('/lista-vehiculo');
      }
    );
  }


}
