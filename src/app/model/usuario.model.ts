import { ParentEntity } from './parentEntity.model';
export class UsuarioModel extends ParentEntity{
    public nombres:string;
    public apellidoPaterno:string;
    public apellidoMaterno:string;
    public telefono:string;
    public direccion:string;
}