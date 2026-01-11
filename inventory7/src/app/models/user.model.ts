export interface User {
  idUser?: number;
  email: string;
  password?: string;
  profile?: Profile;
  rol?: Rol;
}

export interface Profile {
  idProfile?: number;
  name: string;
  lastName: string;
  telefono?: number;
  ci?: number;
  cargo?: string;
}

export interface Rol {
  id?: number;
  cargo: string;
}
