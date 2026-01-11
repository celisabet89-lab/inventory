import {Product} from './product.model';
import {Cliente} from './cliente.model';

export interface Onu {
  id?: number;
  marca: string;
  modelo: string;
  serial: string;
  mac: string;
  observaciones?: string;
  estado: 'Disponible' | 'Asignada' | 'En Reparación';
  contrato?: number;
  codigoQR?: string;
  cliente?: Cliente;
  product?: Product;
}

export interface OnuRequest {
  marca: string;
  modelo: string;
  serial: string;
  mac: string;
  observaciones?: string;
  estado: 'Disponible' | 'Asignada' | 'En Reparación';
  contrato?: number;
  codigoQR?: string;
  clienteId?: number;
  productId?: number;
}
