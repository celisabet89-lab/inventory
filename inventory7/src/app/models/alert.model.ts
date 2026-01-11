import {Product} from './product.model';
import {Cliente} from './cliente.model';
import {Onu} from './onu.model';

export interface Alert {
  idAlert?: number;
  resultado?: string;
  descripcion: string;
  fecha: Date | string;
  estado?: 'PENDIENTE' | 'GESTIONADA';
  stockActual?: number;
  stockMinimo?: number;
  product?: Product;
  cliente?: Cliente;
  onu?: Onu;
}

export interface AlertRequest {
  resultado?: string;
  descripcion: string;
  fecha?: Date | string;
  estado?: 'PENDIENTE' | 'GESTIONADA';
  stockActual?: number;
  stockMinimo?: number;
  productId?: number;
  clienteId?: number;
  onuId?: number;
}
