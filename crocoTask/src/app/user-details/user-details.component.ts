import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs'; 
import { User } from '../interface/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.user$ = this.userService.getUserInfo(id);
    }
  }
}
