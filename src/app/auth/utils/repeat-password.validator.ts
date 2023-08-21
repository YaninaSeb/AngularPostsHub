import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMismatchValidator(password: string, repeatPassword: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const passwordValue: string = control.get(password)?.value;
        const repeatPasswordValue: string = control.get(repeatPassword)?.value;
        
        if (passwordValue !== repeatPasswordValue) {
            return { passwordMismatchValidator: true };
        }

        return null;
    };
}
