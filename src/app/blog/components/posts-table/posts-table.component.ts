import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-posts-table',
    templateUrl: './posts-table.component.html',
    styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit {
    public allPosts$!: Observable<PostModel[]>;

    constructor(private readonly postsService: PostsService) {}

    public ngOnInit(): void {
        this.allPosts$ = this.postsService.posts$;

        this.postsService.setPosts();
    }
}
