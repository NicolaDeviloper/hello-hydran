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
  @Input('user-data') user: User | undefined;

  //per progagare l'evento al padre
  @Output('onDeleteUSer') userDeleted = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit() {}

  deleteUser(user) {
    //alert(user.lastname);
    this.userService.deleteUser(user);
  }

  /* 
 deleteUser() {
    alert(this.user.lastname);
  }
  */
}
