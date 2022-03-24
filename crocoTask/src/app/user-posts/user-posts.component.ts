import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Posts } from '../interface/posts';
import { User } from '../interface/user';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.sass']
})
export class UserPostsComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private postService: PostsService) { }

  post$!: Observable<Posts>;
  user$!: Observable<User>

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.post$ = this.postService.getUserPosts(id);
    }
  }
}
