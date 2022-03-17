import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  userList: any
  constructor(private appService: UserService) { }

  ngOnInit(): void {
    this.userList = this.appService.getUsers();
  }
}
