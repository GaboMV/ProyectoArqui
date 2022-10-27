import { NumberValueAccessor } from "@angular/forms";
import {UserModel} from "./registro";

export class ingresoModel{

  idRegistro:number = 0;
  ingreso:string = "";
  salida:string = "";
  idUsuario: UserModel = new UserModel() ;
}
