import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormModel } from '../../models/login-form.model';
import { LoginDataModel } from '../../models/login-data.model';
import { AuthService } from '../../services/auth.service';
import { passwordValidator } from '../../utils/password.validator';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
    public form!: FormGroup<LoginFormModel>;
    public showPassword: boolean = false;

    constructor(private readonly fb: FormBuilder, private readonly authService: AuthService) {}

    public ngOnInit(): void {
        this.form = this.fb.group<LoginFormModel>({
            email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
            password: this.fb.control<string | null>(
                null, 
                [
                    Validators.required,
                    Validators.minLength(6),
                    passwordValidator()
                ]
            ),
        });
    }

    get email(): AbstractControl<string | null> | null {
        return this.form.get('email');
    }
    
    get password(): AbstractControl<string | null> | null {
        return this.form.get('password');
    }

    public toggleShowPassword(): void {
        this.showPassword = !this.showPassword;
    }

    public onSubmitForm(): void {
        if (this.form.valid) {
            const data: LoginDataModel = {
                email: this.form.controls.email.value!,
                password: this.form.controls.password.value!
            };

            this.authService.login(data);
        }
    }
}
