import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (authService.authState.value) {
        return true;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }
};
