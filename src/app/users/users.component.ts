import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users;
    this.users = this.service.getUsers();
  }

  /*
  onDeleteUser(user: any) {
    this.service.deleteUser(user);
  }
*/
  onDeleteUser(user: User) {
    this.service.deleteUser(user);
  }
}
