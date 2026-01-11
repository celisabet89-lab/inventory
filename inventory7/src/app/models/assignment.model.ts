import {Onu} from './onu.model';
import {Cliente} from './cliente.model';
import {User} from './user.model';

export interface Assignment {
  id?: number;
  fecha: Date | string;
  datos?: string;
  fotosUrls?: string; // JSON string
  checklistCompletado?: boolean;
  itemsChecklist?: string; // JSON string
  onu: Onu;
  cliente: Cliente;
  user: User;
}

export interface AssignmentRequest {
  fecha?: Date | string;
  datos?: string;
  fotosUrls?: string[];
  checklistCompletado?: boolean;
  itemsChecklist?: ChecklistItem[];
  onuId: number;
  clienteId: number;
  userId?: number;
}

export interface ChecklistItem {
  label: string;
  checked: boolean;
  observacion?: string;
}
