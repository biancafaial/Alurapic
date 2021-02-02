import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>
  user: User

  constructor(userService : UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
   }

  ngOnInit() {
  }

}
