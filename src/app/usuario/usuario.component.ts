import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';
import { UsuarioModel } from '../model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class UsuarioComponent implements OnInit {
 private usuarios:Array<UsuarioModel>
  constructor(private usuarioservicio:UsuarioService) { }

  ngOnInit() {
    this.loadUsusarios();
  }

  private loadUsusarios():void {
   this.usuarioservicio.getUsuarios().subscribe(res=>{
    this.usuarios=res;
    //console.log(res);
   });
  }

}
