import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor() { }

  ricercaUtente(email: string) : Boolean {
    let Usersaved = JSON.parse(localStorage.getItem('user-' + email));
    if (Usersaved) {
      return true
    }
    return false;
  }
  registrazioneUtente(email: string, password: string): void {
    console.log("email : ", email, "password : ", password);
    localStorage.setItem('user-' + email, JSON.stringify({ "email": email, "password": password }));
  }

  getUserFromLocalstorage(email:string){
   return  localStorage.getItem('user-' + email);

  }

  loginUtente(email: string, password: string): Boolean {
    let Usersaved = JSON.parse(localStorage.getItem('user-' + email));
    if (Usersaved && Usersaved.password == password) {
      return true
    }
    return false;
  }
}
