import { UsuarioModel } from './../model/usuario.model';
import { UsuarioComponent } from './../usuario/usuario.component';
import { HttpClient } from '@angular/common/http';
import { RestResponseModel } from './../model/restResponse.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrearUsuarioService {

  constructor(private http:HttpClient) { }
  /**
   * validate
   * metodo que valida campos obligatorios
usuario:UsuarioModel   */
  public validate(usuario:UsuarioModel) :boolean{
    let isValid:boolean=true;
    if (!usuario.nombres) {
      isValid=false;
    }
    if (!usuario.apellidoPaterno) {
      isValid=false;
    }
    if (!usuario.apellidoMaterno) {
      isValid=false;
    }
    if (!usuario.direccion) {
      isValid=false;
    }
    return isValid;
  }
 public saveOrUpdate(usuario:UsuarioModel):Observable<RestResponseModel>{
  return this.http.post<RestResponseModel>('http://localhost:8008/saveOrUpdate',JSON.stringify(usuario));
}
  
}
