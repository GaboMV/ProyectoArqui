import { NumberValueAccessor } from "@angular/forms";
import {vehiculoModel} from "./vehiculo";
import {UserModel} from "./registro";

export class UserModel1{

  idEstadia:number = 0;
  costo:string = "";
  ingreso:string = "";
  salida:string = "";
  espacio:string = "";
  idUsuario: UserModel = new UserModel() ;
  idVehiculo: vehiculoModel= new vehiculoModel();
  status:number = 0;

}
