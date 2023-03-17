/* Docs : 
    convenctional commit link : ( https://www.conventionalcommits.org/en/v1.0.0/ )
    fireship ( tecnologie in 100 s ) : https://fireship.io/ 
    typescript :  https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

// typescript  e un super set di javascript , 
// ovverro contiene delle funzionalita aggiuntava di typescript 

const stringa:string = 'ciao';

console.log({stringa});

// definire un tipo stringente 
let stingastretta : "ciao" | "hola" = "ciao";

stingastretta = "hola";
// stingastretta = "holsa"; // segna un errore perche non posso assegnare un valore al di fuori di quello definito "ciao" od "hola"


type Greeting = string | number ; // creo un tipo personalizzato 

let saluto : Greeting;
saluto = "ciao";
saluto = 9;
saluto = "prova";
saluto = "asdasd";

type Coder = {name:string , skills:string[]}
type Coder2 = {name:string , skills:Array<string>}

type Skills = string | number ; // creo un tipo personalizzato 
type Coder3 = {name:string , skills:Array<Skills>}

type UserAddress = { street : string , city : string , country : string , zipCode:string}
type User = { name :string , age : number , address? : UserAddress}
// ? indica che una chiave puo puntare ad un valore che non e sempre presente , 
// quando non sara presente sara undefined 

const user :User = {
    name:'',
    age:18,
    address : {
        street:'',
        city:'Catania',
        country:'',
        zipCode:'',
    },
}

if(user.address){
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
console.log({userCity})

// in questo caso l'assegnazione verra fatta solotanto se il valore non e null o undefined 
user.address ??={
    street:'',
    city:'Palermo',
    country:'',
    zipCode:'',
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

type ErroreVoluto = string & undefined ;
// in questo caso l'hover su ErroreVoluto sara never , perche non potra 
// mai essere definita una variabile che sia stringa e al tempo stesso undefined 

// infatti se proviamo a definere una variabile typescript andra in errore 
// let prova : ErroreVoluto = ''; --> Errore


type FormState = 'idle' | 'dirty' | 'loading ' | 'success' | 'error';

type objectType = { [key:string] : number}; // { "chiave" : 10 }

// contare le occorrenze di un array 

[1,5,4,1] // {1:2,4:1,5:1}


// Function 


// async awiat 