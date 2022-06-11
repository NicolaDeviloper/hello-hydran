import { AnimationStyleMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

// BACKTICK = Alt + 096
@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  public users: any[] = [];

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user: any) {
    this.service.deleteUser(user);
  }
}
