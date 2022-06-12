import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() onAnnullaUserDetail = new EventEmitter();

  constructor(private service: UserService) {}

  ngOnInit() {}

  click_annullaUserDetail() {
    this.onAnnullaUserDetail.emit();
  }
}
