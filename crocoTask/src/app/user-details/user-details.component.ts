import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Posts } from '../interface/posts';
import { User } from '../interface/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$!: Observable<User>;
  // post$!: Observable<Posts[]>

  POSTS!: Posts[] ;
  public posts = this.POSTS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.user$ = this.userService.getUserInfo(id);
    }
  }

  onSelect(user: User) {
    this.router.navigate(['/user-posts', user.id])
  }
}
