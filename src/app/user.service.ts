import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  
  getUsers() {
    return [
      {
        name: 'Nicola',
        lastname: 'Sperone',
        email: 'ciaoo@gmail.com',
        fiscalcode: 'NCLSPR39D21ADX',
        province: 'Taranto',
        phone: '09982145678',
        age: 35,
      },
      {
        name: 'Davide',
        lastname: 'Nuirbah',
        email: 'nuir@lycos.it',
        fiscalcode: 'DVDSPR32TT2TG4EX',
        province: 'Bari',
        phone: '080123458',
        age: 35,
      },
      {
        name: 'Beatrice',
        lastname: 'Spareow',
        email: 'beatnuo@gmail.com',
        fiscalcode: 'BTRCR39D21ADX',
        province: 'Taranto',
        phone: '09982145678',
        age: 34,
      },
      {
        name: 'Vito',
        lastname: 'Caparbi',
        email: 'f34@gmail.com',
        fiscalcode: 'VTCPBR24D212FSX',
        province: 'Brindisi',
        phone: '099828463478',
        age: 35,
      },
    ];
  }
}
