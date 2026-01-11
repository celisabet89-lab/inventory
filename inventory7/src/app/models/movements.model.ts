import {User} from './user.model';
import {Product} from './product.model';

export interface Movements {
  idMovements?: number;
  cantidad: number;
  fecha: Date | string;
  tipo: 'ENTRADA' | 'SALIDA';
  responsable?: string;
  observaciones?: string;
  user?: User;
  product: Product;
}

export interface MovementsRequest {
  cantidad: number;
  fecha?: Date | string;
  tipo: 'ENTRADA' | 'SALIDA';
  responsable?: string;
  observaciones?: string;
  userId?: number;
  productId: number;
}
