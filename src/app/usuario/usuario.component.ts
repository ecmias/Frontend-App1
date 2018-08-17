import { Component, OnInit } from '@angular/core';

import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[UsuarioService]
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioservicio:UsuarioService) { }

  ngOnInit() {
  }

}
