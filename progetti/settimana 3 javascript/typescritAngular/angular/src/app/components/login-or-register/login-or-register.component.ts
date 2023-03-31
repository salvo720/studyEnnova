import { Component, inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map, BehaviorSubject } from 'rxjs';
import { AuthServiceService } from '../../services/authService/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.scss']
})
export class LoginOrRegisterComponent {

  private fb = inject(FormBuilder);
  private authServiceService = inject(AuthServiceService);
  private route = inject(ActivatedRoute)
    // nei formgroup , bisogna sempre verificare che i formcontrol non siano nulli , in particolare nei getter ,
  // perche propio come possiamo aggiungere dei formControll possiamo anche rimuoverli e su progetti dove
  // lavorano piu persone si puo eliminare un form control e se non prevediamo queste casiste il codice si rompe
  // quando si prova ad accedere a una di questi formControl

  formGroup = this.fb.group({
    // name: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    // surname: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl<string>("", []),
    password: new FormControl<string>("", []),
    // favoriteColor: new FormControl<string>("", [Validators.required, Validators.minLength(3)]),
    // cosi andiamo a validare un intero gruppo con delle regole , alla linea successiva
  }, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]);


  User$ = new BehaviorSubject({});

  ricercaUtente() {
    this.authServiceService.ricercaUtente(this.email.value);
    console.log(this.authServiceService.ricercaUtente(this.email.value));
  }


  RegistrazioneUtenteSubmit($event: SubmitEvent) {
    $event.preventDefault();
    console.log("formGroup : ", this.formGroup)
    // console.log("name :", this.name.value)
    // console.log("surname :", this.surname.value)
    console.log("email :", this.email.value)
    console.log(" password : ", this.password.value)


    this.authServiceService.registrazioneUtente(this.email.value, this.password.value);


  }

  loginUtente() {
   let  isLogged : Boolean = false ;
   isLogged=this.authServiceService.loginUtente(this.email.value , this.password.value);
    // console.log( this.authServiceService.loginUtente(this.email.value , this.password.value))
   if(isLogged   )  {
   const User =  this.authServiceService.getUserFromLocalstorage(this.email.value);
   const UserParse =  JSON.parse(User);
    this.User$.next(UserParse);
    // aggiungere un redirect sull'header
    // this.route.
   }

  }

  // get name(): FormControl {
  //   // return this.formGroup.get('name') as FormControl;
  //   // possiamo accedere in alternativa usando il formgropu.controls
  //   return this.formGroup.controls['name'] as FormControl;
  // }

  // get surname(): FormControl {
  //   return this.formGroup.get('surname') as FormControl;
  // }

  get email(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.formGroup.get('password') as FormControl;
  }

  // get favoriteColor(): FormControl {
  //   return this.formGroup.get('favoriteColor') as FormControl;
  // }

}

  // Esercizio :
  // Creare un form con email e password
  // al submit stampare i dati in un console.log()

  // portiamo il form a formGroup e creaiamo una pagina per la rigistrazione di un user

  // al submit del form richiamare il metodo
  // del service authService.register

  // AuthService e un service che creeremo oggi , si occupa di creare / loggare user ,
  // ha 3 metodi search(username) , register(username,password) , login(username,password)

  // creare un utente significa salvarlo dentro il localStorage
  // - es : LocalStorage.setItem('user-)

  // creare un utente significa salvarlo dentro il localStorage

  // creare solo 1 form con 3 bottoni

  // - creare un utente significa salvarlo dentro il localStorage
  // es: localStorage.set('user-[USER.USERNAME]', JSON.stringify(user))
  // - Recuperare un utente by username significa cercare la chiave user-{USERNAME}
  // es: localStorage.getItem('user-ilasw') -> null | string
  // - Loggare utente significa cercare lo user relativo e fare check sulla sua pw


  // aggiungere un behavior subject che emette un valore con i dati dell'utente
