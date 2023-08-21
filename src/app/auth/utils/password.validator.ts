import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!/(?=.*[a-zA-Z])(?=.*[0-9])/.test(value)) {
            return { passwordValidator: true };
        }

        return null;
    };
}
