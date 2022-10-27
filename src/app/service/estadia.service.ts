import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../api';
import {UserModel1} from "../model/estadia";
import {UserModel} from "../model/registro";

@Injectable({
  providedIn: 'root'
})
export class EstadiaService {

  constructor(private http: HttpClient) { }


  saveUser(User: UserModel1){
    return this.http.post<any>(Config.apiUrl + '/estadia', User);

  }

  getUsuarios(){
    return this.http.get<UserModel1[]>(Config.apiUrl + '/estadia');

  }
  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/estadia/'+id,);

  }
  edit(user: UserModel1){
    return this.http.put<any>(Config.apiUrl + '/estadia' , user);

  }
}
