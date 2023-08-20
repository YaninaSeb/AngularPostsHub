import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn) {
        return true;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }
};
