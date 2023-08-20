import { Component, Input } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
    selector: 'app-posts-item',
    templateUrl: './posts-item.component.html',
    styleUrls: ['./posts-item.component.css']
})
export class PostsItemComponent {
    @Input() post!: PostModel;
}
