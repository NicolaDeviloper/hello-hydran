import { Component, Input, OnInit } from '@angular/core';

@Component({
  //inputs: ['user:user-data'],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input('user-data') user;

  constructor() {}

  ngOnInit() {}

  deleteUser(user) {
    alert(user.lastname);
  }

  /* 
 deleteUser() {
    alert(this.user.lastname);
  }
  */
}
