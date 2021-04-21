import { AbstractControl, ValidatorFn } from "@angular/forms";

export function DateValid() : ValidatorFn | null {
    return (control : AbstractControl) => {
        let maDate : Date = new Date(control.value)
        if(control.value == null) return null;
        if(maDate.getFullYear() <= (new Date().getFullYear() -13)) {
            return null;
        }
        else return {dateError : 'Vous êtes trop jeune'}
    }
}