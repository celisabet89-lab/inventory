import {User} from './user.model';

export interface Cliente {
  idCliente?: number;
  name: string;
  apellido: string;
  telefono?: number;
  direccion?: string;
  user?: User;
}

export interface ClienteRequest {
  name: string;
  apellido: string;
  telefono?: number;
  direccion?: string;
  userId?: number;
}
