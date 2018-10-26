import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public userData: Array<any>;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((data) => {
      console.log('data:' + data);
      this.userData = data;
    }, (err) => {
      console.log('err: ' + err);
    });
  }

}
