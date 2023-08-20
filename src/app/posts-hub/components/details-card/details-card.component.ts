import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-details-card',
    templateUrl: './details-card.component.html',
    styleUrls: ['./details-card.component.css']
})
export class DetailsCardComponent implements OnInit {
    public post!: PostModel | any;

    constructor(
        private readonly activateRoute: ActivatedRoute,
        private httpService: HttpService
    ) {}

    ngOnInit(): void {
        this.activateRoute.params.subscribe((params: Params) => {
            const postId: number = params['id'];

            this.httpService.getPostById(postId).subscribe((data: PostModel) => {
                this.post = data;
            });
        });
    }
}
