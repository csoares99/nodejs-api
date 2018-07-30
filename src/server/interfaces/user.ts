export type typeUserRole = 'admin' | 'place-admin';

export interface IUser {
  id: string;
  name: string;
  role: typeUserRole;
  password: string;
  email: string;
  active: boolean;
}
