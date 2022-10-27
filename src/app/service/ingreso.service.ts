import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import {ingresoModel} from "../model/Ingreso";

@Injectable({
  providedIn: 'root'
})
export class IngresoService {

  constructor(private http: HttpClient) { }


  saveUser(User: ingresoModel){
    return this.http.post<any>(Config.apiUrl + '/registro', User);

  }

  getUsuarios(){
    return this.http.get<ingresoModel[]>(Config.apiUrl + '/registro');

  }
}
