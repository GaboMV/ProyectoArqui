import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { identity } from 'rxjs';
import { loginModel } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { RegistroService} from 'src/app/service/registro.service';
import Swal from 'sweetalert2';
import {UserModel} from "../../model/registro";
import {ingresoModel} from "../../model/Ingreso";
import {IngresoService} from "../../service/ingreso.service";
import {vehiculoModel} from "../../model/vehiculo";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('spinner') spinner: any;
  public id:any;
  userlogin = true;
  userregister = false;


  UserForm: FormGroup = new FormGroup({})
  //Buttons clicks functionalities
  private user: UserModel;

  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }

  constructor(private router: Router,private route:ActivatedRoute, private registroService: RegistroService,private ingresoService: IngresoService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({

      nickname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userType: new FormControl('1',[]),


    }, );
  }

  saveUser(){
    let ing:ingresoModel = new ingresoModel();
    let date: Date = new Date();
    let hora:string;
    hora=date.toString();
    this.registroService.getUser(this.UserForm.value.nickname).subscribe(

      data => {
        this.user=data[0];
        console.log( data);
        console.log( this.user.usuario);
        console.log( this.UserForm.value.nickname);

        if((this.user.usuario == this.UserForm.value.nickname)&&(this.user.clave== this.UserForm.value.password)&&(this.user.status==1)){

          if (this.user.prioridad=="1"){
          this.router.navigateByUrl('/lista-personal');}
          if (this.user.prioridad=="2"){
            this.router.navigateByUrl('/lista-estadia');}

          this.saveIng()

        }
        else{

          alert("contraseña o usuario incorrectos");
        }
      }

    )



  }



  saveIng(){
    let ing:ingresoModel = new ingresoModel();
    let date: Date = new Date();
    let hora:string;
    hora=date.toString();



    ing.idUsuario.idUsuario = this.user.idUsuario;
    ing.ingreso= hora;


    console.log(ing)
    this.ingresoService.saveUser(ing).subscribe(
      (data:any) => {
        console.log(data);


      }
    );
  }








}
