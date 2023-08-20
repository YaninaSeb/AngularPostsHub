import { Injectable } from '@angular/core';
import { LoginDataModel } from '../models/login-data.model';
import { RegistrationDataModel } from '../models/registration-data.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isLoggedIn!: boolean;

    constructor(private router: Router) {
        this.isLoggedIn = this.isUserLoggedIn();
    }

    public isUserLoggedIn(): boolean {
        const userToken: string | null = localStorage.getItem('userToken') || null; 
        
        return !!userToken;
    }

    public isUserRegistered(data: LoginDataModel): boolean {
        const userEmail = localStorage.getItem('userEmail') || null;
        const userPassword = localStorage.getItem('userPassword') || null;

        return userEmail === data.email && userPassword === data.password;
    }

    public login(data: LoginDataModel): void {
        if (this.isUserRegistered(data)) {
            localStorage.setItem('userToken', Date.now().toString());
            this.isLoggedIn = true;
    
            this.router.navigate(['/posts']);
        }
    }

    public registration(data: RegistrationDataModel): void {
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userPassword', data.password);

        this.router.navigate(['/auth/login']);
    }
}
