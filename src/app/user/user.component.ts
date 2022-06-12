import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  //inputs: ['user:user-data'],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;

  //per progagare l'evento al padre
  @Output() onDeleteUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  @Output('onAnnullaUserDetail') onAnnullaUserDetail = new EventEmitter();

  constructor(private userService: UserService) {
    this.user = {
      name: '',
      lastname: '',
      email: '',
      fiscalcode: '',
      province: '',
      phone: '',
      age: 35,
    };
  }

  ngOnInit() {}

  click_deleteUser() {
    //deleteUser(user) {
    //1) alert(user.lastname);
    //2) this.userService.deleteUser(user);
    this.onDeleteUser.emit(this.user);
  }

  click_updateUser() {
    console.log(this.user);
    this.onSelectUser.emit(this.user);
  }
}
