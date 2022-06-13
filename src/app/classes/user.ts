import { UserInteface } from '../interfaces/user';

export class User implements UserInteface {
  id: number;
  name: string;
  lastname: string;
  email: string;
  fiscalcode: string;
  province: string;
  phone: string;
  age: number;
}
