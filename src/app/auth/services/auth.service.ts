import { Injectable } from '@angular/core';
import { LoginDataModel } from '../models/login-data.model';
import { RegistrationDataModel } from '../models/registration-data.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public authState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private router: Router) {
        this.authState.next(this.isUserLoggedIn());
    }

    public isUserRegistered(data: LoginDataModel): boolean {
        const userEmail: string | null = localStorage.getItem('userEmail') || null;
        const userPassword: string | null = localStorage.getItem('userPassword') || null;

        return userEmail === data.email && userPassword === data.password;
    }

    public isUserLoggedIn(): boolean {
        const userToken: string | null = localStorage.getItem('userToken') || null; 
        
        return !!userToken;
    }

    public registration(data: RegistrationDataModel): void {
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userPassword', data.password);

        this.router.navigate(['/auth/login']);
    }

    public login(data: LoginDataModel): void {
        if (this.isUserRegistered(data)) {
            localStorage.setItem('userToken', Date.now().toString());
            this.authState.next(true);
    
            this.router.navigate(['/posts']);
        }
    }

    public logout(): void {
        localStorage.removeItem('userToken');
        this.authState.next(false);

        this.router.navigate(['/auth/login']);
    }
}
