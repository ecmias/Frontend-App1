import { Router } from '@angular/router';
import { OK } from './../model/httpStatus';
import { UsuarioModel } from './../model/usuario.model';

import { Component, OnInit } from '@angular/core';
import { CrearUsuarioService } from './crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
  providers: [CrearUsuarioService]
})
export class CrearUsuarioComponent implements OnInit {
  private usuario: UsuarioModel;
  private isValid: boolean = true;
  private message: string = "";
  private title:string="Crear Usuario";
  constructor(private crearUsuarioService: CrearUsuarioService, private routes: Router) {

    if (sessionStorage.getItem("usuario")) {
      this.title="Modificar Usuario";
      this.usuario = JSON.parse(sessionStorage.getItem("usuario"));
      sessionStorage.clear();
    } else {
      this.usuario = new UsuarioModel();
    }
  }

  ngOnInit() {
  }
  /**
   * saveOrUpdate
   */
  public saveOrUpdate(): void {
    this.isValid = this.crearUsuarioService.validate(this.usuario);
    if (this.isValid) {
      this.crearUsuarioService.saveOrUpdate(this.usuario).subscribe(res => {
        if (res.responseCode == OK) {
          this.routes.navigate(['/usuarioComponent'])
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = "Los campos con * son obligatorios";
    }
  }

}
