import { Component, OnInit } from '@angular/core';
import { RegistrationFormModel } from '../../models/registration-form.model';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegistrationDataModel } from '../../models/registration-data.model';
import { passwordMismatchValidator } from '../../utils/repeat-password.validator';
import { passwordValidator } from '../../utils/password.validator';

@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
    public form!: FormGroup<RegistrationFormModel>;
    public showPassword: boolean = false;
    public showRepeatPassword: boolean = false;

    constructor(private readonly fb: FormBuilder, private readonly authService: AuthService) {}

    public ngOnInit(): void {
        this.form = this.fb.group<RegistrationFormModel>(
            {
                name:this.fb.control<string | null>(null, [Validators.required, Validators.minLength(4)]),
                email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
                password: this.fb.control<string | null>(
                    null, 
                    [
                        Validators.required,
                        Validators.minLength(6),
                        passwordValidator()
                    ]
                ),
                repeatPassword: this.fb.control<string | null>(
                    null, 
                    [
                        Validators.required,
                        Validators.minLength(6),
                        passwordValidator()
                    ]
                )
            },
            {
                validators: passwordMismatchValidator('password', 'repeatPassword')
            }
        );
    }

    get name(): AbstractControl<string | null> | null {
        return this.form.get('name');
    }

    get email(): AbstractControl<string | null> | null {
        return this.form.get('email');
    }
    
    get password(): AbstractControl<string | null> | null {
        return this.form.get('password');
    }

    get repeatPassword(): AbstractControl<string | null> | null {
        return this.form.get('repeatPassword');
    }

    public toggleShowPassword(): void {
        this.showPassword = !this.showPassword;
    }

    public toggleShowRepeatPassword(): void {
        this.showRepeatPassword = !this.showRepeatPassword;
    }

    public onSubmitForm(): void {
        if (this.form.valid) {
            const data: RegistrationDataModel = {
                name: this.form.controls.name.value!,
                email: this.form.controls.email.value!,
                password: this.form.controls.password.value!
            };

            this.authService.registration(data);
        }
    }
}
