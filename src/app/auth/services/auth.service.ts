import { Injectable } from '@angular/core';
import { LoginDataModel } from '../models/login-data.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    public login(data: LoginDataModel): void {
    // this.store.dispatch(fromAuthActions.Login({ data }));
    }

}
