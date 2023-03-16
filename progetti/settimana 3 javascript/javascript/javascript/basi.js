
// console.clear();
console.log("i'a alive");

const camelCaseVariable = '';
const snake_case_variable = '';
const kebabCase = 'kebab-case'; // negli url e nei nomi dei file 
const PascalCase = 'DromedaryCase';

// Stringa 
const stringa1 = 'str "in"ga'.concat('').concat(PascalCase);
const stringa2 = "st'ri \n' " + "nga";
const stringa3 = `stringa  
${stringa1}`;

// const 
const obj = {};

// Script e Dependecy npm 
// SCRIPT : linee di comando che posso eseguire all'interno del mio progetto e lo posso richiamiamare usando npm run dev 

// le dependecy : sono tutte le dipendeze che servono al pacchetto finale 
// le devDependecy : non verranno portate all'interno della compilazione , 
// ovverro non arriverranno alla build finale ma vengono utilizzati solo dallo sviluppatore

// "vite": "^4.1.4" , // ^ indica che verra installato la versione da 4.1.4 in poi  , se non e presete ^ verra isntallata la versione esatta 
//  webpack : e nato per la gestione degli asset per convertirtili tutti nello stesso formato , mette insieme tutti i file javascript e crea un bunde , 
// questo prende il nome di treeshaking , ovvero suqotere l'albero ed elimina tutto quello che non serve al progetto 
// lo stesso lo fa git 

// webpack video corso fabio biondi 

// perche alla stringa possiamo usare il . ? 

// noi possiamo trattare le variabile come degli oggetti su javascript 
// il prototipo : e l'oggetto che descrivere quell'elemento 

console.log(stringa2);
console.log(stringa3);
console.log({ stringa1, stringa2, stringa3 });

const newString = new String(' a ');

// tutti i costruttori hanno una cosa in comune quando passiamo un dato viene fatta la coercezione 
// del tipo ovvero viene convertito il tipo con quello dell'oggetto che si va a creare 


const date = new Date();
const month = String(date.getMonth() + 1).padStart(2, '0');

// il backtick fa la coercezione in stringa forzata di quello che gli viene passato
const month2 = `${date.getMonth() + 1} `.padStart(2, '0');

console.log(month);
console.log(month2);


// non si puo covertire un oggetto da oggeto in stringa se non si passa dal json.stringfy
console.log(String(obj));

console.log(JSON.stringify(obj));

// Tipi di variabili 

// console.clear();
console.log(varVariabile);
// console.log(letVariabile); ----> Error
// console.log(constVariabile);  ----> Error

// var : 
// hoisting : hoisting o sollevamento prende la dichiarazone di un elemento e lo porta in cima e funziona sui var e sui function 
var varVariabile;
var varVariabile;
console.log(varVariabile);
// let : non puo essere ridichiarato all'interno dello stesso scope 
let letVariabile;
console.log(letVariabile);

// let letVariabile;
// const : e modificabile ma non e sovrascribili , 
// ovvero posso definire un array vuoto e poi pushare un elemento ma non modificare quell'elemento 
const constVariabile = [];

constVariabile.push("stringa") // e modificabile ma non riscrivibile 

// Funzioni 

//  la lenght ci permette di capire quanti argomenti ha una funzione 

// e avvenuto il sollevamento della funziona 
log("ciao")

function log(test) {

}


function hello() {
    const constVariabile = '';
    // closure : ovvero il fatto di porter andare ad usare dei dati definiti all'esterno della funzione 
    // closure : e la memoria dello scope di dichiarazione 
    console.log("hello".concat(' ').concat(name));
}

const hi = () => {
    const constVariabile = '';
    console.log(`hi ${name}`);
    console.log("this es6", this)
}

hello();
hi();

// self calling function 

(function () {
    const name = 'peppino';
    hi();
})();

/*
function log1(){
    console.log("log1");
}
setTimeout(()=>{
    console.log("log2");
},10);
setTimeout(()=>{
    console.log("log3");
},0);
console.log("log4");
log1();
*/
// log4 
// log1
// log3
// log2 

/**
 *  
spiegazione  : 
esecuzione log4 subito perche senza event loop  , lo stesso vale per log1 
log2 e log3 usando l'evento loop , qui la priorita viene definita dal tempo di attessa , in questo caso 
il tempo di attesa e 0 nel log3 quindi viene eseguito subito e poi ritirnato nell stack della chiamate mentre il log2 
ci mette un po nel frattempo l'evento loop va avanti proseguendo con log 3 
 */


function hiToAll() {
    console.log(arguments); // caduto in disuso in favore del restOperator 
    console.log("hiToAll", this)
    for (let nome of arguments) {
        console.log(` ciao a ${nome}`);
    }
}

// arguments : e la keyword che si puo usare all'interno delle funzione e ci indica quanti sono gli argomenti , 
// e motlo simile ad un array , possiamo avere tutti gli argomenti che vogliamo , perche possono essere infiniti 

hiToAll('pippo', 'pluto', 'paperino');


// Esercitazione : 
function sayMyName(name) {
    // la closure : ricorda la variabile gia dichiarata ci permette di riusarla piu volte 
    return function () {
        console.log(` ciao a ${name}`);
    }
}

// console.clear();
const sayIt = sayMyName("Walter");
sayIt();
sayIt();
sayIt();
