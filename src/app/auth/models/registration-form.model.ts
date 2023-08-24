import { FormControl } from '@angular/forms';

export interface RegistrationFormModel {
    name: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    repeatPassword: FormControl<string | null>;
}
