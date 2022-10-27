import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserModel } from 'src/app/model/registro';
import { RegistroService } from 'src/app/service/registro.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
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

  constructor(private router: Router,private route:ActivatedRoute, private registroService: RegistroService) { }

  ngOnInit(): void {
    this.UserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('',[Validators.email, Validators.required, Validators.minLength(3),Validators.maxLength(50)]),
      nickname: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userType: new FormControl('1',[]),
      repeatedPassword: new FormControl('',Validators.required),

    }, { validators: this.checkPasswords });
  }

  saveUser(){
    let user:UserModel = new UserModel();
    this.spinner.nativeElement.style.display = "inline-block";
    if(this.UserForm.value.password !== this.UserForm.value.repeatedPassword){
      alert("Las contraseñas no coinciden");
      return
    }
    if(this.UserForm === null)
      return

    console.log(this.UserForm.value)
    user.nombre = this.UserForm.value.name;

    user.usuario = this.UserForm.value.nickname;
    user.clave = this.UserForm.value.password;
    user.prioridad = this.UserForm.value.userType;
    console.log(user)
    this.registroService.saveUser(user).subscribe(
      (data:any) => {
        console.log(data);

        alert("Usuario registrado exitosamente");
        this.router.navigateByUrl('/lista-personal');
      }
    );
  }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    let pass = group.get('password').value
    let confirmPass = group.get('repeatedPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }


}
