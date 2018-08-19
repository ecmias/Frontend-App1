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
  constructor(private http: HttpClient
    , private h: Http
  ) { }
  public getUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>('http://localhost:8008/getUsuarios');

  }
  public deleteUsuario(usuario: UsuarioModel): void {
    this.http.post('http://localhost:8008/eliminarUsuario', JSON.stringify(usuario)).subscribe();

  }
  public eliminarUsuario(id: Number) {
    return this.h.delete(this.baseUrl + 'eliminarUsuario/' + id, this.options).map((response: Response) => response.json()) .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || "server error");
  }

}
