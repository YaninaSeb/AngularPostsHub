import { Component, Input } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-posts-item',
    templateUrl: './posts-item.component.html',
    styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent {
    @Input() post!: PostModel;

    constructor(private readonly router: Router) {}

    public onShowDetails(id: number): void {
        this.router.navigate(['/posts', id]);
    }
}
