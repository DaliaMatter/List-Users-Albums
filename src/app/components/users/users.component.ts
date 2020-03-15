import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userServices: UserService) { }

  ngOnInit() {
    this.userServices.getUsers().subscribe( users => {
      this.users = users;
    });
  }

}
