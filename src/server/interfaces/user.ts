export type typeUserRole = 'admin' | 'place-admin';

export interface IUser {
  id: string;
  name: string;
  roles: typeUserRole;
  password: string;
  email: string;
  active: boolean;
}
