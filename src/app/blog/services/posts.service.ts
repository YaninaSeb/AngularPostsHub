import { Injectable, DestroyRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { PostModel } from '../models/post.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    public posts$: Observable<PostModel[]>;
    private readonly postsSource: BehaviorSubject<PostModel[]> = new BehaviorSubject<PostModel[]>([]);

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly httpService: HttpService
    ) {
        this.posts$ = this.postsSource.asObservable();
    }

    public setPosts(): void {
        this.httpService.getPosts().pipe(
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((posts: PostModel[]) => {
            this.postsSource.next(posts);
        });
    }

    public setPostsByAuthorId(authorId: number | string): void {
        this.httpService.getPosts().pipe(
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((posts: PostModel[]) => {
            const authorPosts: PostModel[] = posts.filter((post: PostModel) => {
                return authorId === 'all' ? true : post.userId === authorId;
            });
            this.postsSource.next(authorPosts);
        });
    }
}
