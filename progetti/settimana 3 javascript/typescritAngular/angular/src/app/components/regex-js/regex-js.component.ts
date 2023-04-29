import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regex-js',
  templateUrl: './regex-js.component.html',
  styleUrls: ['./regex-js.component.scss']
})
export class RegexJsComponent implements OnInit {
  private fb = inject(FormBuilder);
  formUser: FormGroup

  ngOnInit(): void {
    // build form
    this.buildFormUser();

    // regex
    this.regexJs();

  }

  buildFormUser() {
    // costruzione form con form builder
    this.formUser = this.fb.group({
      nome: ['nome', []],
      cognome: ['cognome', []],
      email: ['email', []],
      password: ['password', []],
      descrizione: ['descrizione', []],
    }, [Validators.maxLength(10), Validators.required]);
  }

  mandaFormUser() {
    // debug form group
    console.log("formGrop", this.formUser, "type", typeof this.formUser,)
    console.log("formUser.nome : ", this.nome);
    console.log("formUser.cognome : ", this.cognome);
    console.log("formUser.email : ", this.email);
    console.log("formUser.password : ", this.password);
    console.log("formUser.descrizione : ", this.descrizione);
  }

  regexJs() {
    // Docs : video yt regex  (https://www.youtube.com/watch?v=3P5wKnrSwqw)

  }

  // getter form control
  get nome(): FormControl {
    return this.formUser.get("nome").value as FormControl;
  }

  get cognome(): FormControl {
    return this.formUser.get("cognome").value as FormControl;
  }

  get email(): FormControl {
    return this.formUser.get("email").value as FormControl;
  }

  get password(): FormControl {
    return this.formUser.get("password").value as FormControl;
  }

  get descrizione(): FormControl {
    return this.formUser.get("descrizione").value as FormControl;
  }


}
