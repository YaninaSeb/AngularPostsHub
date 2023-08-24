import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
    { 
        path: '', 
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard], 
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'posts'
            },
            { 
                path: 'posts', 
                loadChildren: () => 
                    import('./blog/blog.module').then(
                        (module: typeof import('./blog/blog.module')) => module.BlogModule
                    ),
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: () => 
            import('./auth/auth.module').then(
                (module: typeof import('./auth/auth.module')) => module.AuthModule
            )
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
