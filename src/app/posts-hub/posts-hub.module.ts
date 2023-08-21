import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { PostsItemComponent } from './components/posts-item/posts-item.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import { PostsComponent } from './pages/posts/posts.component';
import { DetailsComponent } from './pages/details/details.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    { path: '', component: PostsComponent, pathMatch: 'full' },
    { path: ':id', component: DetailsComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        PostsComponent,
        DetailsComponent,
        PostsTableComponent,
        PostsItemComponent,
        DetailsCardComponent,
        
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        
        MatCardModule,
        MatProgressSpinnerModule,
        MatIconModule,
    ],
})
export class PostsHubModule { }
