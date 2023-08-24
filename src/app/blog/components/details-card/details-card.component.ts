import { Component, DestroyRef, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-details-card',
    templateUrl: './details-card.component.html',
    styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
    public post!: PostModel;

    constructor(
        private readonly destroyRef: DestroyRef,
        private readonly activateRoute: ActivatedRoute,
        private readonly httpService: HttpService
    ) {}

    public ngOnInit(): void {
        this.activateRoute.params.pipe(
            takeUntilDestroyed(this.destroyRef)
        ).subscribe((params: Params) => {
            const postId: number = params['id'];
            this.httpService.getPostById(postId).subscribe((data: PostModel) => {
                this.post = data;
            });
        });
    }
}
