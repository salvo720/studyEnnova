import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  model = {
    favoriteColor: '',
    name: '',
    surname: '',
  }

  private fb = inject(FormBuilder);
  // nei formgroup , bisogna sempre verificare che i formcontrol non siano nulli , in particolare nei getter ,
  // perche propio come possiamo aggiungere dei formControll possiamo anche rimuoverli e su progetti dove
  // lavorano piu persone si puo eliminare un form control e se non prevediamo queste casiste il codice si rompe
  // quando si prova ad accedere a una di questi formControl

  formGroup = this.fb.group({
    name: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    surname: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    favoriteColor: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    // cosi andiamo a validare un intero gruppo con delle regole , alla linea successiva
  }, [Validators.maxLength(100)]);


  nametoUpperCase$ = this.name.valueChanges.pipe(
    map((text: string) => text.toUpperCase())
  );

  submit($event: SubmitEvent) {
    $event.preventDefault();
    console.log("formGroup : ", this.formGroup)
    console.log("name :", this.name.value)
    console.log("surname :", this.surname.value)
    console.log("email :", this.email.value)
    console.log(" password : ", this.password.value)
    console.log("favoriteColor : ", this.favoriteColor.value)
    console.log(this.nametoUpperCase$)
    // console.log("favoriteColor : ", this.favoriteColor.addAsyncValidators())
    // un esempio di validatore asincrono e quando adimao a fare qualcosa sul server come ad esempio verificare
    // che l'email non sia gia registrata

    // const name = this.formGroup.name.value;
  }

  get name(): FormControl {
    // return this.formGroup.get('name') as FormControl;
    // possiamo accedere in alternativa usando il formgropu.controls
    return this.formGroup.controls['name'] as FormControl;
  }

  get surname(): FormControl {
    return this.formGroup.get('surname') as FormControl;
  }

  get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  get favoriteColor(): FormControl {
    return this.formGroup.get('favoriteColor') as FormControl;
  }


}

