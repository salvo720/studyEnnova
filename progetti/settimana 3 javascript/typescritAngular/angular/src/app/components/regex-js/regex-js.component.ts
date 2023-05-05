import { Component, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import IRegExpAndError from 'src/app/interface/IRegExpAndError';
import IRegExpError from 'src/app/interface/IRegExpError';

// il codice di questo componente segue la guard condiction

function isValidEmail() {
  return (control: AbstractControl): ValidationErrors | null => {
    // control.value rappresenta il valore del campo che stiamo verificando
    const email:string = control.value.toString();
    // const regex = /(\w+)@(\w+)\.(\1)/;  // questa regola non funziona perche fopo aver fatto match , il gruppo sara equivalente alla stringa del match meglio definire le regole ogni volta
    const regex:RegExp = /@(\w+)\.([a-z]+)$/i;  // questa regola non funziona perche fopo aver fatto match , il gruppo sara equivalente alla stringa del match meglio definire le regole ogni volta
    // prima regex per verifica dell'email che contega @ e .
    // uso ^ per far si che il match deve partire dal primo carattere
    // uso $ perche la stringa deve terminare con il gruppo specificato
    console.log("isValidEmail:", email);
    console.log("isValidEmail:", regex.test(email.toString()));

    if (!regex.test(email)) {
      return { isValidEmail: { requiredchars: " @ e .", message: "la tua email deve contenere : " } };
    }

    return null
  }
}

function isStrongPassword() {
  const errors : IRegExpError = {
    minLength: { message: "Errore la lunghezza minima richeista e 8" },
    lowerCase: { message: "Errore la password deve contenere un almeno un carattere minuscolo" },
    upperCase: { message: "Errore la password deve contenere un almeno un carattere maiuscolo" },
    number: { message: " Errore la password deve contenere un almeno un numero" },
    specialChars: { message: "Errore la password deve contenere un almeno un carattere speciale come : !%^&*()-,+=:-?." },
  };

  return (control: AbstractControl): ValidationErrors | null => {
    const minLenght: number = 8;
    // control.value rappresenta il valore del campo che stiamo verificando
    const password : string = control.value?.toString() || '';

    if (password.length < minLenght) return { isStrongPassword: errors['minLength'] };

    const regexes : IRegExpAndError[]  = [
      { regex: /([a-z])/, error: errors['lowerCase'] },
      { regex: /([A-Z])/, error: errors['upperCase'] },
      { regex: /([0-9])/, error: errors['number'] },
      { regex: /([!%^&*()-,+=:-?.])/, error: errors['specialChars'] },
    ];

    for (const { regex, error } of regexes) {
      if (!(regex.test(password))) {
        return { isStrongPassword: error };
      }
    }

    console.log("tutte le regex passate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!", ", password : ", password)
    return null
  }
}


@Component({
  selector: 'app-regex-js',
  templateUrl: './regex-js.component.html',
  styleUrls: ['./regex-js.component.scss']
})
export class RegexJsComponent implements OnInit {
  private fb = inject(FormBuilder);
  formUser: FormGroup
  // per usarelo nella view
  Object = Object

  ngOnInit(): void {
    // build form
    this.buildFormUser();

    // regex
    this.regexJs();

  }

  buildFormUser() {
    // costruzione form con form builder

    const validFiled = Validators.compose([Validators.maxLength(15), Validators.required, Validators.minLength(3)]);
    this.formUser = this.fb.group({
      nome: ['nome', [validFiled]],
      cognome: ['cognome', [validFiled]],
      email: ['email@gmail.com', [validFiled, isValidEmail()]],
      password: ['Prova123!"', [validFiled, isStrongPassword()]],
      descrizione: ['descrizione', [validFiled]],
    });

    console.log("formUser" ,this.nome);

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
    sito test epressioni regolari 2 :  https://regex101.com/

    */

    /*
    // il pattern va indicato all'intero dei due // , esempio /([A-Z])/
    3) alla fine e possibile aggiungere dei parametri :
    3.1) g : indica global e effettuala la ricerca su tette le corrispondenze che ci sono , se non viene usato si ferma alla prima corrispondenza
    3.2) i : indica case insensitive , ovevero la distinzione della stessa lettera tra miauscolo e minuoscolo  e disattiva , se non vienne usato e attiva
    3.3) m : indica che la ricerca  , qunado si cerca su fine ella linea come il $ , deve essere fatta su piu linee


    4) meta caratteri :
    4.1) . : che non seleziona i cartetti . ma tutti i caratteri e anche gli spazi ad eccezzione dei caratteri di new line
    4.2) \w : cerca un caratterrre dalla A alla Z , gli underscor _ , e un numero da 0 a 9
    4.3) \W : da il contrario di \w minuscolo , ovvero seleziona tutti i cartatteri che non sono numeri , lettere o underscore.
    4.4) \d : cerca un caratterrre numerico da 0 a 9
    4.5) \D : da il contrario di \d , ovvero cerca tutti i caratteri che non sono numeri
    4.6) \s : seleziona tutti gli spazi
    4.7) \S : seleziona I caratteri che non sono spazi e non seleziona i caratteri di nel line


    5) quantificatori :
    5.1) ? : indica che quel carattere da cercare e opzionale , cioe deve avere almeno 0 o al massimo 1 occorrenza , mentre il resto della stringa e obbligatoria
    5.2) + : indica che quel carattere da cercare deve avere almeno 1 e puo averne piu di una  , mentre il resto della stringa e obbligatoria
    5.3) * : indica che quel carattere da cercare deve avere almeno 0 e puo averne piu di una  , mentre il resto della stringa e obbligatoria
    5.4) {3} : indica che di quel carattere dobbiamo avere le corrispondenze messe tra le parentesi {} , in questo caso 3 , la corrispondenza e fatta su 3 caratteri esatti
    5.5) {3,} : indica che qul carattere deve avere una corripsondenza di almeno 3 caratti o piu di 3
    5.6) {3,5} : indica che qul carattere deve avere una corripsondenza di almeno 3 caratti o e al massimo 5 , nel caso e presente piu volte non saranno presi in considerazione i valori oltre il massimo cioe 5
    5.7) $: il carattere deve essere alla fine della linea
    5.8) ^ : cerca i caratteri ad inizio del testo se combinato con m , sara ad inizio linea


    6) range e gruppi :
    6.1) () : con le parentesi tonde andiamo a creare dei gruppi , che possono essere gruppi numeri (catcging group ) o gruppi non numerati , e al quel gruppo possimao assegnare un quantificatore e il carattere or (|),
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


    7) riferimenti :
    in indietro back reference forward reference :
    ad esempio :
    7.1) /(io) sono \1 /gi = /io sono io /
    7.2) /((io) sono \1) /gi = in questo caso il gruppo esterno e la numerazione precedente o minore del gruppo interno ,
    quindi questo e il numero dei gruppi :
    7.2.1) (io sono \1 ) ;
    7.2.2) (io)
    quindi per fare riferimento ad io il gruppo diventa ((io) sono \2)

    in avanti forward reference :
    per eseuguire il reference in avanti ad esempio (\2rosso | (verde) ) i gruppi saranno :
    1)(\2rosso|(verde)) : \2 non e definito alla prima esecuzione quindi si andra a cercare solo per (verde) , ma alla seconda esecuzione \2 sara definito e sara verderosso
    2)(verde)


    8) selezione parole o numeri :
    per selezione i punti come carattere ci basta eseguire l'escape di .  e lo si fa tramite \. ,
    se usiamo
    8.1) \d : numeri da 0 a 9
    8.2) \D : qausiasi carattere tranne i numeri da 0-9
    8.3) \h : seleziona tutti gli spazi e le tabulazioni
    8.4) \s : selezionatutti gli spazi le tabulazioni e i ritorni a capo
    8.5) \w : seleziona tutte le lettere e i numeri da 0-9

    esempio :
    ([A-Z])\w+ , scomponiamo questa regola :
    1) prima gruppo ([A-Z]) : e un gruppo con range A-Z seleziona tutte le lettere con lettera maiuscola da a alla z .
    2) \w : seleziona tutte le lettere e i numeri da 0-9
    3) + :  indica che quel carattere da cercare deve avere alemno 1 o piu corrispondenze


    9) ricerca negli url :
    ad esempio se ho degli url possiamo provare a cercare
    9.1) se continene o meno la stringa http o https
    (http| https)
    9.2) escape su / :
    (:\/\/)
    9.3) inizio url con www. :
    (w{3}\.)
    9.4) nome del dominio. con a-z 0-9 e trattini :
    ([a-z 0-9 ] [a-z 0-9 \-]+ \.) : escape su - , il piu alla fine di range indica che quel range puo avere piu corrispondenze , alla fine aggiunto escape si .
    9.5) fine del dominio , .it o .com o altro :
    ([a-z]+) o in altrenativa ([it|com|info])

    espressione compleata : (http| https)?(:\/\/)?(w{3}\.)([a-z 0-9 ][a-z0-9 \-]+\.)([a-z]+)
    oppure puoi farla cosi: (http| https)?(:\/\/)?(w{3}\.)([a-z]|[0-9]|[\-\.]+)([a-z]+)


    10) word boundaries o limiti di parole :
    \b : prima della parola cercata deve esserci uno spazio ouna tabulazione e anche dopo
    \b ciao: prima della parola cercata deve esserci uno spazio ouna tabulazione   , e la c deve essere il primo carattere della parola
    ciao \b: alla fine  della parola cercata deve esserci uno spazio ouna tabulazione   , e la c deve essere il primo carattere della parola
    \b ciao \b: prima della parola e alla fine  della parola cercata deve esserci uno spazio ouna tabulazione   , e la c deve essere il primo carattere della parola


    11) seleziona pigra o ingorda :
    11.1) modalita greedy o ingorda :
    se abbiamo questo testo : ciao a "tutti" questo e un corso sulle "espressioni regolari"
    e usiamo la seguente regex :\".*" , andra a selezionare da : "tutti " questo e un corso sulle "espressioni regolari" ,
    questo perche il motore regex de default lavora in modalita greedy ovvero ingorda /avida e provera sempre ad estrapolare la stringa piu lunga possibile
    11.2) modalita lazy :
    per attivare la modalita lazy o pigra , che selezionera la stringa piu corta possbile


    12) le ancore :
    le ancore non trovano corrispondenza con alcun carattere il loro scopo e quello di trovare determinate posizioni all'interno del testo , ad esempio :
    ciao a tutti questo e un corso sulle espressioni regolari :
    /^[a-z0-9]/gim : prende il primo carattere della stringa per ongi linea
    /[a-z0-9]$/gim : prende l'ultimo carattere della stringa per ongi linea
    /\A[a-z0-9]/gim : prende il primo carattere della stringa
    /[a-z0-9]\Z/gim : prende il primo carattere della stringa , l'unica cosa a cui stare attenti e che se l'ultimo carattere e un ritorno a capo
    in questo caso trovera sempre corrispondenza , perche \Z considerera come ultimo carattere il carattere precendete
    /\s\z/gim : seleziona gli spazi le tabulazioni e i ritorni a capo, l'unica cosa a cui stare attenti e che se l'ultimo carattere e un ritorno a capo usiamo \z per
    prende il ritorno a capo

    */

  }

  // getter form control
  get nome(): FormControl {
    return this.formUser.get("nome") as FormControl;
  }

  get cognome(): FormControl {
    return this.formUser.get("cognome") as FormControl;
  }

  get email(): FormControl {
    return this.formUser.get("email") as FormControl;
  }

  get password(): FormControl {
    return this.formUser.get("password") as FormControl;
  }

  get descrizione(): FormControl {
    return this.formUser.get("descrizione") as FormControl;
  }

}
