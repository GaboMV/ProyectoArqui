import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import { UserModel } from '../model/registro';
import {UserModel1} from "../model/estadia";

import {ingresoModel} from "../model/Ingreso";


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }


  saveUser(User: UserModel){
    return this.http.post<any>(Config.apiUrl + '/usuario', User);

  }
  getUsuarios(){
    return this.http.get<UserModel[]>(Config.apiUrl + '/usuario');

  }
  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/usuario/'+id,);

  }
  edit(user: UserModel){
    return this.http.put<any>(Config.apiUrl + '/usuario' , user);

  }
  getUser(username: string){
    return this.http.get<any>(Config.apiUrl+"/usuario/query2?usuario="+username);
  }


}
