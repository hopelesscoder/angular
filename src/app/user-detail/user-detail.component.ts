import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../models/user.model';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        // this.users = this.users.filter(u => u !== user);
      });
  }

  updateUser(user: User): void {
    this.userService.createUser(this.user)
    .subscribe( data => {
      alert('User updated successfully.');
    });
  }

  goBack(): void {
    this.location.back();
  }

}
