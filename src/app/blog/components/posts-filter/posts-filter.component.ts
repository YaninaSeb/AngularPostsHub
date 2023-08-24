import { Component, DestroyRef, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { PostModel } from '../../models/post.model';
import { MatSelectChange } from '@angular/material/select';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-posts-filter',
    templateUrl: './posts-filter.component.html',
    styleUrls: ['./posts-filter.component.css']
})
export class PostsFilterComponent implements OnInit {
    public authorsList!: number[];

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly postsSevice: PostsService
    ) { }

    public ngOnInit(): void {
        this.postsSevice.posts$.pipe(
            take(2),
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((posts: PostModel[]) => {
            this.authorsList = [...new Set(posts.map((post: PostModel) => post.userId))];
        });
    }

    public onAuthorSelected(event: MatSelectChange): void {
        this.postsSevice.setPostsByAuthorId(event.value);
    }
}
