import { Component, VERSION } from '@angular/core';
import { User } from './classes/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm: boolean = false;
  userSelected: User = new User();

  event_updateUser(user: User) {
    this.showForm = true;
    this.userSelected = user;
  }

  event_annullaUserDetail() {
    alert('Annulla!');
    // this.userSelected = undefined;
  }

  newUser() {
    this.userSelected = new User();
    this.showForm = true;
  }
}
