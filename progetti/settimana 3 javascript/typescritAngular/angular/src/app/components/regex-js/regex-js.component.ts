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
    /*
    Docs :
    video :yt regex  (https://www.youtube.com/watch?v=3P5wKnrSwqw)
    sito test epressioni regolari : https://regexr.com/
    */

    /*
    // il pattern va indicato all'intero dei due // , esempio /([A-Z])/
    alla fine e possibile aggiungere dei parametri :
    1) g : indica global e effettuala la ricerca su tette le corrispondenze che ci sono , se non viene usato si ferma alla prima corrispondenza
    2) i : indica case insensitive , ovevero la distinzione della stessa lettera tra miauscolo e minuoscolo  e disattiva , se non vienne usato e attiva
    3) m : indica che la ricerca  , qunado si cerca su fine ella linea come il $ , deve essere fatta su piu linee

    meta caratteri :
    1) . : che non seleziona i cartetti . ma tutti i caratteri e anche gli spazi ad eccezzione dei caratteri di new line
    2) \w : cerca un caratterrre dalla A alla Z , gli underscor _ , e un numero da 0 a 9
    3) \W : da il contrario di \w minuscolo , ovvero seleziona tutti i cartatteri che non sono numeri , lettere o underscore.
    4) \d : cerca un caratterrre numerico da 0 a 9
    5) \D : da il contrario di \d , ovvero cerca tutti i caratteri che non sono numeri
    6) \s : seleziona tutti gli spazi
    7) \S : seleziona I caratteri che non sono spazi e non seleziona i caratteri di nel line


    quantificatori :
    1) ? : indica che quel carattere da cercare e opzionale , cioe deve avere almeno 0 o al massimo 1 occorrenza , mentre il resto della stringa e obbligatoria
    2) + : indica che quel carattere da cercare deve avere almeno 1 e puo averne piu di una  , mentre il resto della stringa e obbligatoria
    3) * : indica che quel carattere da cercare deve avere almeno 0 e puo averne piu di una  , mentre il resto della stringa e obbligatoria
    4) {3} : indica che di quel carattere dobbiamo avere le corrispondenze messe tra le parentesi {} , in questo caso 3 , la corrispondenza e fatta su 3 caratteri esatti
    5) {3,} : indica che qul carattere deve avere una corripsondenza di almeno 3 caratti o piu di 3
    5) {3,5} : indica che qul carattere deve avere una corripsondenza di almeno 3 caratti o e al massimo 5 , nel caso e presente piu volte non saranno presi in considerazione i valori oltre il massimo cioe 5
    6) $: il carattere deve essere alla fine della linea
    7) ^ : cerca i caratteri ad inizio del testo se combinato con m , sara ad inizio linea


    range e gruppi :
    1) () : con le parentesi tonde andiamo a creare dei gruppi , che possono essere gruppi numeri (catcging group ) o gruppi non numerati , e al quel gruppo possimao assegnare un quantificatore e il carattere or (|),
    esempio : /mi piace la (pasta) ? /gi ;
    esempio 2 : mi piace la (pasta | pizza ) /gi ;
    usando le parentesi () andiamo a creare un gruppo , e usando / con la poszione del gruppo possiamo indicare quel gruppo cosa deve cercare , esempio :
    /(buona) (è) (buona) /gi puo essere ridotto cosi :  /(buona) (è) \1 /gi

    i gruppi iniziano a contare da 1

    ([a-c]+)[0-9] \1 /gi : il primo gruppo indica di cercare un stringa che contine le lettere da a fino c , e in aggiunta deve essere seguito da un numero compreso tra 0 e 9 ,
    lo \1 indicia di ripetere la ricerca del 1 gruppo ([a-c]+) ovvero la ricerca delle lettere da a fino c

    se usiamo ?: prima di un gruppo quel gruppo non sara conteggiato quando facciamo il riferimento tramite reference a quel gruppo .
    esempio : /(?:[0-9]) ([a-c]{3}) [2] \1
    lo \1 fa riferimento a :  ([a-c]{3}) , perche il primo groppo contiene ?: che non lo fara valere nel coteggio del back refernce (refernce all'indietro )


    riferimenti :


    */









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
