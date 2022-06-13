import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

// BACKTICK = Alt + 096
@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  @Output('updateUser') updateUser = new EventEmitter<User>();

  @Output('onAnnullaUserDetail') onAnnullaUserDetail = new EventEmitter();

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users;
    this.users = this.service.getUsers();
  }

  event_onDeleteUser(user: User) {
    //onDeleteUser(user: any) {
    this.service.deleteUser(user);
  }

  event_onSelectUser(user: User) {
    //console.log('selected user: ', user);
    const userCopy = Object.assign({}, user);
    this.updateUser.emit(userCopy);
  }
}
