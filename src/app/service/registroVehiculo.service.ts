import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import {vehiculoModel} from "../model/vehiculo";
import {UserModel1} from "../model/estadia";
import {UserModel} from "../model/registro";

@Injectable({
  providedIn: 'root'
})
export class RegistroVehiculoService {

  constructor(private http: HttpClient) { }


  saveUser(User: vehiculoModel){
    return this.http.post<any>(Config.apiUrl + '/vehiculo', User);

  }
  getUsuarios(){
    return this.http.get<vehiculoModel[]>(Config.apiUrl + '/vehiculo');

  }
  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/vehiculo/'+id,);

  }
  edit(user: vehiculoModel){
    return this.http.put<any>(Config.apiUrl + '/vehiculo' , user);

  }
}
