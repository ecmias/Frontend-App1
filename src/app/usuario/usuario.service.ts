import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService {

  private usuarios:Array<UsuarioModel>;
  constructor(private http:HttpClient) { }
  public getUsuarios():Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>('http://localhost:8008/getUsuarios');
    
  }

}
