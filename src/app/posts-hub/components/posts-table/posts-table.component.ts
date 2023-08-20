import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-posts-table',
    templateUrl: './posts-table.component.html',
    styleUrls: ['./posts-table.component.css']
})
export class PostsTableComponent implements OnInit{
    public allPosts!: PostModel[];

    constructor(private httpService: HttpService) {}

    public ngOnInit(): void {
        this.httpService.getPosts().subscribe((data: PostModel[]) => {
            this.allPosts = data;
        });
    }
}
