import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinLengthValidators(longueur : number) : ValidatorFn | null {
    return (control : AbstractControl) => {
        let myValue : string = control.value
        if(myValue == null) return null
        if(myValue.length < longueur) return {myError : 'string trop court'}
        if(myValue.length == longueur) return {myOtherError : 'string à la bonne longueur'}
        return null
    }
}