import { Component, OnInit } from '@angular/core';
import { RegistrationFormModel } from '../../models/registration-form.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegistrationDataModel } from '../../models/registration-data.model';

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
        this.form = this.fb.group<RegistrationFormModel>({
            name:this.fb.control<string | null>(null, Validators.required),
            email: this.fb.control<string | null>(null, [Validators.required, Validators.email]),
            password: this.fb.control<string | null>(null, Validators.required),
            repeatPassword: this.fb.control<string | null>(null, Validators.required)
        });
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
