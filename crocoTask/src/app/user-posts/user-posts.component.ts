import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Posts } from '../interface/posts';
import { User } from '../interface/user';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  @Input() user!: User;
  @Input() post!: Posts;

  POSTS!: Posts[] ;
  public posts = this.POSTS;
  userLastPost!: Posts[];
  posts$!: Observable<Posts[]>;

  constructor( private route: ActivatedRoute,
               private postService: PostsService) { }

  post$!: Observable<Posts>;
  userLastPost$!: Observable<Posts[]>;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id !== null) {
      this.postService.getPosts().subscribe((posts => {
        this.posts = posts.filter(
          post => post.userId === +id
        );
        console.log(this.posts)
      }));
    }
  }
}
