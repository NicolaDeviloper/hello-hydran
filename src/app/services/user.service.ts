import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { UserInteface } from '../interfaces/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Nicola',
      lastname: 'Sperone',
      email: 'ciaoo@gmail.com',
      fiscalcode: 'NCLSPR39D21ADX',
      province: 'Taranto',
      phone: '09982145678',
      age: 35,
    },
    {
      id: 2,
      name: 'Davide',
      lastname: 'Nuirbah',
      email: 'nuir@lycos.it',
      fiscalcode: 'DVDSPR32TT2TG4EX',
      province: 'Bari',
      phone: '080123458',
      age: 35,
    },
    {
      id: 3,
      name: 'Beatrice',
      lastname: 'Spareow',
      email: 'beatnuo@gmail.com',
      fiscalcode: 'BTRCR39D21ADX',
      province: 'Taranto',
      phone: '09982145678',
      age: 34,
    },
    {
      id: 4,
      name: 'Vito',
      lastname: 'Caparbi',
      email: 'f34@gmail.com',
      fiscalcode: 'VTCPBR24D212FSX',
      province: 'Brindisi',
      phone: '099828463478',
      age: 35,
    },
  ];

  getUsers() {
    return this.users;
  }

  //  deleteUser(user: any) {
  deleteUser(user: User) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }

  updateUser(user: UserInteface) {
    const idx = this.users.findIndex((v) => v.id == user.id);
    if (idx != -1) {
      this.users[idx] = user;
    }
  }

  createUser(user: UserInteface) {
    this.users.splice(0, 0, user);
  }

}
