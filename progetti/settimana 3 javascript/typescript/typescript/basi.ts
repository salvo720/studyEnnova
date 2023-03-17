/* Docs : 
    convenctional commit link : ( https://www.conventionalcommits.org/en/v1.0.0/ )
    fireship ( tecnologie in 100 s ) : https://fireship.io/ 
    typescript :  https://www.typescriptlang.org/docs/handbook/utility-types.html
    codewar : https://www.codewars.com/ 
*/

// typescript  e un super set di javascript , 
// ovverro contiene delle funzionalita aggiuntava di typescript 

const stringa: string = 'ciao';

console.log({ stringa });

// definire un tipo stringente 
let stingastretta: "ciao" | "hola" = "ciao";

stingastretta = "hola";
// stingastretta = "holsa"; // segna un errore perche non posso assegnare un valore al di fuori di quello definito "ciao" od "hola"


type Greeting = string | number; // creo un tipo personalizzato 

let saluto: Greeting;
saluto = "ciao";
saluto = 9;
saluto = "prova";
saluto = "asdasd";

type Coder = { name: string, skills: string[] }
type Coder2 = { name: string, skills: Array<string> }

type Skills = string | number; // creo un tipo personalizzato 
type Coder3 = { name: string, skills: Array<Skills> }

type UserAddress = { street: string, city: string, country: string, zipCode: string }
type User = { name: string, age: number, address?: UserAddress }
// ? indica che una chiave puo puntare ad un valore che non e sempre presente , 
// quando non sara presente sara undefined 

const user: User = {
    name: '',
    age: 18,
    address: {
        street: '',
        city: 'Catania',
        country: '',
        zipCode: '',
    },
}

if (user.address) {
    console.log(user.address.city);
}

// optional chaining 

//  && usato consi ritorna l'ultimo valore
//  || usato consi ritorna il primo valore
console.log(user.address && user.address.city && "ciao sono un optional chaining ");
console.log(user.address?.city);



// Nullish operator 
// ?? : se il valore e null o undinfed ritorna null     
const userCity = user.address?.city ?? null;
console.log({ userCity })

// in questo caso l'assegnazione verra fatta solotanto se il valore non e null o undefined 
user.address ??= {
    street: '',
    city: 'Palermo',
    country: '',
    zipCode: '',
}

// Partial <User>
// indica che qul tipo o interfaccia ha tutti i campi opzionali 

// Readonly <User>
// l'elemento readonly e solo leggibile e non modificabile 

// Record <'street' | 'zipcode'| 'country | zipcode , string> 
// in questo caso tutti i valori sono di tipo stringa 
// definisce un oggetto per andare a definire un oggetto , prende 2 parametri :
// 1) le chiavi dell'oggetto 
// 2) i valori dell'oggetto

type ErroreVoluto = string & undefined;
// in questo caso l'hover su ErroreVoluto sara never , perche non potra 
// mai essere definita una variabile che sia stringa e al tempo stesso undefined 

// infatti se proviamo a definere una variabile typescript andra in errore 
// let prova : ErroreVoluto = ''; --> Errore


type FormState = 'idle' | 'dirty' | 'loading ' | 'success' | 'error';

type objectType = { [key: string]: number }; // { "chiave" : 10 }

// contare le occorrenze di un array 
//  Esercizio TS count occorrenze 
// dato un array contare per ogni elemento quante volte viene ripetuto 

[1, 5, 4, 1] // {1:2,4:1,5:1}

const array: string[] = ["Roma", "Milano", "Catania", "Roma", "Genova", "Milano", "Catania", "Roma"]  ; // as const

// tipizzazzioni possibili di output 
// type Citynames = typeof array[number];
// const city:Citynames ; 

// const outputEsempio :  Record<string,number> = {};



const output = {};  // output : "Roma" : 3,  "Milano" : 2 , Catania : 2 , Genova : 1
let value = '';


// fatto con for 
let cittaContate : any = {}
let contatatoreCitta : number = 0;
for (let index = 0; index < array.length; index++) {
    const cittaFor1 = array[index];
    contatatoreCitta = 0;
    for (let index2 = 0; index2 < array.length; index2++) {
        const cittaFor2 = array[index2];
        if(cittaFor1 == cittaFor2) contatatoreCitta ++ ;
    }
    cittaContate[array[index]] = contatatoreCitta;
}

console.log(` cittaContate : ${cittaContate} `);
console.log({cittaContate});


// fatto con reduce 
const inzialValue: any = {}
let counter = 1;

// reduce ritorna un nuovo oggetto che viene messo dopo 
array.reduce((acc, elementReduce: string, index: number, array) => {
    counter = 0;
    array.forEach(function(elementForEach2){
        if (elementReduce == elementForEach2) counter++; 
    });
    return inzialValue[elementReduce] = counter;
}, inzialValue);

console.log(` inzialValue : ${inzialValue} `);
console.log({inzialValue});


// metodo solo con 1 ciclo 
const accRedu :any= {};
let contataoreIniziale  = 1 ;
array.reduce((acc, elementReduce: string, index: number, array) => {
    if (elementReduce in accRedu ) accRedu[elementReduce] = accRedu[elementReduce] +1;
    else accRedu[elementReduce] = contataoreIniziale;
}, accRedu);

console.log(` accRedu : ${accRedu} `);
console.log({accRedu});


// metodo solo con 1 ciclo corto  
const accRedu2 :any= {};
array.reduce((acc, citta: string, index: number, array) => {
    // return accRedu2[elementReduce2]  = (accRedu2[elementReduce2] ?? 0)+ contataoreIniziale2;
    // return acc[citta] = (acc[citta] ?? 0) + 1;
}, accRedu2);

console.log(` accRedu2 : ${accRedu2} `);
console.log({accRedu2});


let accRedu3 : { [key:string ] :number } = {};
// metodo solo con 1 ciclo corto  
const occorenze = array.reduce((acc, citta) => ({ ...acc, [citta] : (acc[citta] ?? 0)+ 1}), accRedu3);

console.log(` occorenze : ${occorenze} `);
console.log({occorenze});

// Function 


// async awiat 

export { };
