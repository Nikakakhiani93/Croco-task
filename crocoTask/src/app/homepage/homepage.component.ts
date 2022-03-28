import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(
    private appService: UserService, 
    private router: Router ) { }

  userList$!: Observable<User[]>;

  ngOnInit(): void {
    this.userList$ = this.appService.getUsers();
  }

  onSelect(user: { id: any; }) {
    this.router.navigate(['/user-details', user.id]);
  }
}
