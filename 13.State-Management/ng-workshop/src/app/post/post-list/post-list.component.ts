import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../shared/interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() themeId: string;

  // postList: IPost[];
  @Input() postList: IPost[];
  @Input() isLoading: boolean;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    // this.postService.loadPostList(this.themeId, 5).subscribe(x => { this.postList = x; });
  }
}
