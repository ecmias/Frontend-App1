import { UsuarioModel } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class UsuarioService {
  private baseUrl :string= 'http://localhost:8008/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private usuarios: Array<UsuarioModel>;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient
    , private h: Http
  ) { }
  public getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>('http://localhost:8008/getUsuarios').catch(this.errorHandler)

  }
 /**
  * Usa httpclient , que es mejor no es necesario parsear a json()
  * @param usuario 
  */
  public deleteUsuario(usuario: UsuarioModel) {
   return this.http.delete(this.baseUrl + 'eliminarUsuario/' + usuario.id,this.httpOptions)
    .pipe(
    ).catch(this.errorHandler);
  }
  /**
   * Usa Http 
   * @param id recibe el id del usuario que se desea eliminar
   */
  public eliminarUsuario(id: Number) {
    return this.h.delete(this.baseUrl + 'eliminarUsuario/' + id, this.options).map((response: Response) => response.json()) .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || "server error");
  }

}
