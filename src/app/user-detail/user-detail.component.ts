import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Output() onAnnullaUserDetail = new EventEmitter();

  constructor(private service: UserService) {}

  ngOnInit() {}

  click_annullaUserDetail() {
    this.onAnnullaUserDetail.emit();
  }
}
