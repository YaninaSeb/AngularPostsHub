import { Injectable } from '@angular/core';
import { LoginDataModel } from '../models/login-data.model';
import { RegistrationDataModel } from '../models/registration-data.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    public login(data: LoginDataModel): void {
        const userEmail = localStorage.getItem('userEmail') || null;
        const userPassword = localStorage.getItem('userPassword') || null;
    }

    public registration(data: RegistrationDataModel): void {
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userPassword', data.password);

        this.router.navigate(['/auth/login']);
    }
}
