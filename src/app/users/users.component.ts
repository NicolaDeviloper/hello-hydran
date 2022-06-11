import { AnimationStyleMetadata } from '@angular/animations';
import { Component } from '@angular/core';
import { UserService } from '../user.service';

// BATCKTICKS = Alt + 096
@Component({
  selector: 'app-users',
  providers: [UserService],
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent {
  public users: any[] = [];

  constructor(private service: UserService) {
    this.users = service.getUsers();
  }
}
