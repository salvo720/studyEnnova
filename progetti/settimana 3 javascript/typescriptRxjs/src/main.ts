import { Subscription, concatMap, debounceTime, filter, from, fromEvent, interval, map, of, pairwise, scan, switchMap, take, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

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
const acc: any = [];
interval(6).pipe(
  scan((acc, times: number) => {
    return allNumbersSort[times];
  }, acc),
  take(6)
)
  .subscribe((number: any) => console.log("interval + scan : ", number))
// */

const input = document.querySelector<HTMLInputElement>('#inputUser');
console.log("input :", input)

// Input listener 
// inseriamo nell'html un input di testo 
// ascoltiamo gli eventi usando il fromEvent gli eventi di input nel nostro campo 
// usiamo debounceTime(150) per evitare input troppoo ravvicinati 
// usiamo un filter per non far passare gli input vuoti o minori di 3 caratteri 
// nel subscribe inserire un console.log()


// subscribepuo accettare 3 funzioni : 
// 1) cosa avviene nel subscribe 
// 2) funzione di errore che viene mostrato quando avviene un errore 
// 3) complete : 
of([]).subscribe(
  (result) => console.log(result),
  (error) => console.error(error),
  () => console.log("completed"))

// passsando un oggetto nel subscribe 
of([]).subscribe({
  next: (value) => console.log(value),
  error: (error) => console.log(error),
  complete: () => console.info("compleato")
})


// --------------------------------------------

// type EventWithTarget <E = UIEvent , T = Element > = E & {target: T};
// fromEvent<EventWithTarget<InputEvent,HTMLInputElement>>(input!, 'keyup',).pipe(

interface EventWithTarget extends UIEvent {
  target: HTMLInputElement
}

// usando typescrit e imporate tipizzare correttaemtne la sorgente 
fromEvent<EventWithTarget>(input!, 'keyup',).pipe(
  // map((event) =>  (event.target.value.trim().length > 3 ) ? event.target.value : false),
  debounceTime(500),
  map((event) => event.target.value),
  filter(stringInput => stringInput.trim().length > 3),
  // pairwise() // prende il precente e il successivo valore e lo ritorna come array 
).subscribe({
  next: (event) => console.log(event),
  error: () => console.log("error"),
  complete: () => console.log("complete")
});

// type guard 
/*
function isEventAndInputWithTheTarget (event:UIEvent) : event is {InputEvent & {target : HTMLInputElement}}{
  return event instanceof InputEvent && !!(event.target) &&event.target instanceof HTMLInputElement
}

function elementExist(el:Element|null) : el is Element{
  return el instanceof Element
}
*/


// concatMap : preserva l'ordine degli obeservable e li restituisce tutti 
// switchtMap : esegue gli observable , ma se l'obsevable successivo viene eseguito prima che l'attuale viene compleatato , 
// inizia ad eseguire l'observalbe successivo ed annula l'esecuzione di quello attuale , da priporita all'ultimo elemento che viene perservato  
// mergeMap : restiutsce tutti gli observable ma terra soltanto l'ultima 
// ExstatusMap : da priporita all'obervable attuale , in base a quello che arriva prima , e se nel frattempo ne arriva un altro viene ignorato , quindi non esegue l'ultimo observable 

/*
partendo dall'esercizio sull'input fatto in precedenza ,
al posto di fare un console.log dopo il filter esegurie una chiamta Api usand Ajax.getJson 
urlApi = "https://chroniclingamerica.loc.gov/suggest/titles/q?florida"

import { ajax } form 'rxjs/ajax' 
stampare i risultati a schermo 

ajax.getJson ritorna un observable e richiede un url 
*/

const input2 = document.querySelector<HTMLInputElement>('#inputUser2');
const url = "https://chroniclingamerica.loc.gov/suggest/titles/?q=";
let datiRisposta: Subscription;


type ArrayResponse = [string, ...string[]];

datiRisposta = fromEvent<EventWithTarget>(input2!, 'keyup').pipe(
  debounceTime(500),
  map((event) => event.target.value),
  filter(stringInput => stringInput.trim().length > 3),
  // tipizza le chiamate esterne altrimenti saranno di tipo unknown , 
  // e typescrit segnera deli errori quando si usano gli eleemnti di quella rispsota 
  switchMap((ElementCercato: String) => ajax.getJSON<ArrayResponse>(url + ElementCercato)),
  map<ArrayResponse, Array<string>>((arrayResponse) => arrayResponse.slice(1))
  // soluzione 
  // map<ArrayResponse, Array<string>>((arrayResponse) => arrayResponse.at(1)),
  // concatMap((titles) => of(...titles))
).subscribe({
  // interazine con l'esterno avviene dentro il subscrive 
  next: (dati) => {
    console.log("subscribe : ", dati);
    const ul = document.querySelector<HTMLInputElement>('.ContenutoRispsotaAjax')!;
    ul.innerHTML = '';
    dati.forEach(element => {
      if (element.length) {
        const li = document.createElement('li');
        li.innerText = element;
        ul.append(li);
      }

      // soluzione
      // li.innerText = dati;

    });
    // ul?.innerHTML 
  },
  error: () => console.log("error"),
  complete: () => console.log("complete")
});

// .subscribe((res)=>console.log("ajax :" , res ));

export { }
