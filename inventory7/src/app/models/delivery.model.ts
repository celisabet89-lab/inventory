import {User} from './user.model';
import {Cliente} from './cliente.model';
import {Product} from './product.model';

export interface Delivery {
  idDelivery?: number;
  fecha: Date | string;
  observacion?: string;
  user?: User;
  cliente: Cliente;
  details?: DeliveryDetails[];
}

export interface DeliveryDetails {
  idDeliveryDetails?: number;
  cantidad: number;
  delivery?: Delivery;
  product: Product;
}

export interface DeliveryRequest {
  fecha?: Date | string;
  observacion?: string;
  userId?: number;
  clienteId: number;
  details: DeliveryDetailRequest[];
}

export interface DeliveryDetailRequest {
  cantidad: number;
  productId: number;
}
