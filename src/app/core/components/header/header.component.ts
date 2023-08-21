import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isLoggedIn!: boolean;

    constructor(private readonly authService: AuthService) {}

    ngOnInit(): void {
        this.authService.authState.subscribe((isLoggedIn: boolean) => {
            this.isLoggedIn = isLoggedIn;
        });
    }

    public logout(): void {
        this.authService.logout();
    }
}
