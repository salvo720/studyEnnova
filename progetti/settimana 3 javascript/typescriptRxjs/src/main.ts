import { from, fromEvent, interval, map, of, scan, take, tap } from "rxjs";

/** Docs :
 * 1) rxjs operatori : https://rxjs.dev/guide/overview
 * 2) rxjs decision three : https://rxjs.dev/operator-decision-tree
 */

// rxJs e una libreria che estende javascript per la programmazione reattiva e funzionale 
// pattern funzione e un pattern che fa riferimento alle funzionalita metematiche 

// rxJS E ASINCRONO : dato che usiamo la programmazione reattiva nulla e sincrono , in rxJs e tutto asincrono 
// of e l'operatore di eventi piu semplice di tutti prende un evento e lo emette 

const observabletest$ = of("hello World!!").pipe(
  map((stringa) => stringa.toUpperCase()),
  map((text) => text.concat('!')),

)
const subscription = observabletest$.subscribe(console.log);

subscription.unsubscribe();

console.log("sono un log fatto dopo la catena ")

const sum = function (a: number, b: number) {
  return a + b;
}
const dobule = function (n: number) {
  return n * 2;
}

const somma = sum(1, 2);

const dobleN = dobule(somma);
const dobleN2 = dobule(sum(1, 2));

// RXFUNZIONA FINCHE ABBIAMO DEGLI EVENTI QUINDI CI SARA UN EVENT EMITTER , quindi qualcuno che gli eventi li invia e qualcuno che questi event li ascolta 
// obervable emmette l'evento , observable e chi li ascolta 

// observable : e una collezzione di invocabili 
// observer : sono delle funzioni che ci permettorno di ascoltare gli eventi delgi obervable 
// Subscription : ci consento di iscriverci ad un observable 
// Operators : sono degli operatori in modo funzionale e sono map,filter,concat,reduc, ecc ...
// subject : mettere piu osservabli dentro lo stesso oggetto 
// schedulers : sono delle oprazione che vengono eseguite nel futuro 

// formEvent : viene usato quando siamo al di fuori di angular e crea un observable . 
// per convenzione per indicare un observable usiamo il $ alla fine della variabile 
// tap () : esegue delle operazioni alla fine della catena 
const forms = document.querySelectorAll('form');
const clickListener$ = fromEvent(forms, 'click').pipe(

  tap(event => console.log({ event })), // esegue , ma il return del tap viene ignorato 
  map(event => event.target), // il map modifica il valore e il suo return sara l'input successivo 
  tap(event => console.log({ event }))
);

// finche non ci iscriviamo all'observable non vediamo i valori che manda 
const subclickListener = clickListener$.subscribe();


from(['a', 'b', 'c']).pipe(
  tap((value) => console.log({ value }))
).subscribe();

// Scrivere codice che per ogni secondo aggiorna 
// la pagina inserendo a schermo l'ora esatta 

// interval ritorna il numero che indica il numero di emisiioni fatte fino a quel momento 
const orologio$ = interval(1_000).pipe(
  tap((value) => console.log(value)),
  // map(()=>  new Date().toLocaleTimeString())
  map(() => {
    function withTwoChars(dataStringa: number) {
      return String(dataStringa).padStart(2, '0');
    }
    return `${withTwoChars(new Date().getHours())}:${withTwoChars(new Date().getMinutes())}:${withTwoChars(new Date().getSeconds())}`;
  }),
  take(10) // esegue il subscribe per il numero di volte indicata e poi effettuata l'unsubscribe 
);
// detnro la subscribe devo scrivere le operazioni che vanno fatte ad ogni emit 
// --> stampare la data 
const suborologio$ = orologio$.subscribe((data) => {
  let divOrologio = document.querySelectorAll("#orologio")
  divOrologio[0].innerHTML = data
});


// bingo con rxjs 
// esegui un console.log di 6 numeri randomici 
// Bonus : annuncia i risultati distanzaita 1s l'uno dall'altro // interval 

/*
// Soluzione 1 
const allNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
const allNumbersSort = allNumbers.sort(() => Math.floor(Math.random() - .5))
interval(6).pipe(
  map(() => {
    return allNumbersSort.slice(0, 1);
  }),
  take(6)
)
  .subscribe((number: any) => console.log("interval + map : ", number))
*/

/* 
// Soluzione 2 con times 
const allNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
const allNumbersSort = allNumbers.sort(() => Math.floor(Math.random() - .5))
interval(6).pipe(
  map((times: number) => {
    return allNumbersSort[times];
  }),
  take(6)
)
  .subscribe((number: any) => console.log("interval + map : ", number))
*/

// /*
//  Soluzione 3 con scan di rxjs 
const allNumbers = Array.from({ length: 90 }, (_, i) => i + 1);
const allNumbersSort = allNumbers.sort(() => Math.floor(Math.random() - .5))
const acc :any= [];
interval(6).pipe(
  scan((acc , times: number) => {
    return allNumbersSort[times];
  } , acc),
  take(6)
)
  .subscribe((number: any) => console.log("interval + scan : ", number))
// */




export { }
