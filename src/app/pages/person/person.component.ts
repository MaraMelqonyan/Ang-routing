import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {

  public person;
  public routeSubscription;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params
    .subscribe((data) => {
      this.userService.getUserById(data['id'])
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((data) => {
        this.person = data;
        // console.log('data:' + this.person);
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
