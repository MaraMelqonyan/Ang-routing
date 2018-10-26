import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  public postData: Array<any>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((data) => {
        console.log(data);
        this.postData = data;
      }, (err) => {
        console.log(err);
      });
  }
}
