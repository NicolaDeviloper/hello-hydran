import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UcfirstPipe } from './ucfirst.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    UcfirstPipe,
  ],
  bootstrap: [AppComponent],
  providers: [UserService],
})
export class AppModule {}
