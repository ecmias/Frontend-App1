import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

const routes:Routes=[
    { path:'',redirectTo:'/usuarioComponent',pathMatch:'full'},
    {
       
        path:'appComponent',component:AppComponent
    },
    {
        path:'usuarioComponent',component:UsuarioComponent
    },
    {
        path:'crearUsuarioComponent',component:CrearUsuarioComponent
    }
];
@NgModule({
    
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule],
    
})
export class AppRoutingModule {}
