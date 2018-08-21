import { Location } from '@angular/common';
import { NOT_ACCEPTABLE } from './../model/httpStatus';
import { AppPage } from './../../../e2e/app.po';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { UsuarioModel } from '../model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {
  private usuarios: Array<UsuarioModel>
  constructor(private usuarioservicio: UsuarioService, private routes: Router) { }

  ngOnInit() {
    this.loadUsusarios();
  }

  private loadUsusarios(): void {
    this.usuarioservicio.getUsuarios().subscribe(res => {
      this.usuarios = res;
      //console.log(res);
    });
  }
  private edit(usuario: UsuarioModel): void {
    sessionStorage.setItem("usuario", JSON.stringify(usuario));
    this.routes.navigate(['/crearUsuarioComponent']);
  }
  private delete(usuario: UsuarioModel): void {
   // this.usuarioservicio.deleteUsuario(usuario).subscribe((data)=>{this.usuarios.splice(this.usuarios.indexOf(usuario),1)},

    //(error)=>{console.log(error)});
    this.usuarioservicio.deleteUsuario(usuario).subscribe((data)=>{this.usuarios.splice(this.usuarios.indexOf(usuario),1)},
    (error)=>{console.log(error)});
  }
  private eliminar(usuario: UsuarioModel): void {
    this.usuarioservicio.eliminarUsuario(usuario.id).subscribe((data)=>{this.usuarios.splice(this.usuarios.indexOf(usuario),1)},
    
    (error)=>{console.log(error)});
  
  }
 

}
