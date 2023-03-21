/* Docs : 
    convenctional commit link : ( https://www.conventionalcommits.org/en/v1.0.0/ )
    fireship ( tecnologie in 100 s ) : https://fireship.io/ 
    typescript :  https://www.typescriptlang.org/docs/handbook/utility-types.html
    codewar : https://www.codewars.com/ 
    tailwindcss : https://tailwindcss.com/
    hyperui componenti pronti con talwind css : https://www.hyperui.dev/
    
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

const array: string[] = ["Roma", "Milano", "Catania", "Roma", "Genova", "Milano", "Catania", "Roma"]; // as const

// tipizzazzioni possibili di output 
// type Citynames = typeof array[number];
// const city:Citynames ; 

// const outputEsempio :  Record<string,number> = {};



const output = {};  // output : "Roma" : 3,  "Milano" : 2 , Catania : 2 , Genova : 1
let value = '';


// fatto con for 
let cittaContate: any = {}
let contatatoreCitta: number = 0;
for (let index = 0; index < array.length; index++) {
    const cittaFor1 = array[index];
    contatatoreCitta = 0;
    for (let index2 = 0; index2 < array.length; index2++) {
        const cittaFor2 = array[index2];
        if (cittaFor1 == cittaFor2) contatatoreCitta++;
    }
    cittaContate[array[index]] = contatatoreCitta;
}

console.log(` cittaContate : ${cittaContate} `);
console.log({ cittaContate });


// fatto con reduce 
const inzialValue: any = {}
let counter = 1;

// reduce ritorna un nuovo oggetto che viene messo dopo 
array.reduce((acc, elementReduce: string, index: number, array) => {
    counter = 0;
    array.forEach(function (elementForEach2) {
        if (elementReduce == elementForEach2) counter++;
    });
    return inzialValue[elementReduce] = counter;
}, inzialValue);

console.log(` inzialValue : ${inzialValue} `);
console.log({ inzialValue });


// metodo solo con 1 ciclo 
const accRedu: any = {};
let contataoreIniziale = 1;
array.reduce((acc, elementReduce: string, index: number, array) => {
    if (elementReduce in accRedu) accRedu[elementReduce] = accRedu[elementReduce] + 1;
    else accRedu[elementReduce] = contataoreIniziale;
}, accRedu);

console.log(` accRedu : ${accRedu} `);
console.log({ accRedu });


// metodo solo con 1 ciclo corto  
const accRedu2: any = {};
array.reduce((acc, citta: string, index: number, array) => {
    // return accRedu2[elementReduce2]  = (accRedu2[elementReduce2] ?? 0)+ contataoreIniziale2;
    // return acc[citta] = (acc[citta] ?? 0) + 1;
}, accRedu2);

console.log(` accRedu2 : ${accRedu2} `);
console.log({ accRedu2 });


let accRedu3: { [key: string]: number } = {};
// metodo solo con 1 ciclo corto  
const occorenze = array.reduce((acc, citta) => ({ ...acc, [citta]: (acc[citta] ?? 0) + 1 }), accRedu3);

console.log(` occorenze : ${occorenze} `);
console.log({ occorenze });

// Function 


// async await 


// Reference vs Value (differenza tra valore e referenza )

// dichiaro una variabile contente una stringa , il byte di memoria fa sempre riferimento a questa stringa 
// quindi la stringa  e sovrascrivibile e ogni volta che si andra a modificare la stringa si aggiornera la refernza 
// anche perche netrambi sono intercambiabili 
let address = "via etnea 1";
console.log("address :", address);

// quaondo andiamo a effettuare il console.log avremo 2 valori diversi 
// e funziona cosi per tutti i tipi primitivi tranner array e oggetti 
address = "via passo gravina 147";
console.log("address : ", address);


const dormitorio: Array<string> = [];
const persona = 'pippo';


console.log("dormitorio", { dormitorio });

// persona += ""; // e un errore prche non possiamo modifcare la stringa 
setTimeout(() => {
    dormitorio.push(persona);
    //  un console.log di un oggetto puo cambiare nel tempo 
    console.log("dormitorio", { dormitorio });
});


// infatti nel dormitorio nel primo console.log vediamo pippo , questo perche nei tipi primitivi 
// negli oggetti invece essendo una collezzione la la refernza e sempre tramite la collezzione di elementi 

const user2: Object = { id: 3, nome: 'Luca', address: { city: "Catania" } };
console.log(user2);

// in questo caso si dice che gli oggetti vengono passati per reference mentre i tipi primitivi vengono passati per valore 
// const newUser: any = user2;  // qui stiamo assegnandpo los tesso indirizzo di memoria sia per l'oggetto user che per new user quindi modificando newUser andiamo a modicare un newUser e user  
// newUser.id = 4;

// per risolvere questa problematica abbiamo vari modi : 
// 1) far diventare l'oggetto una stringa e ricorvertirlo 

const newUser: any = JSON.parse(JSON.stringify(user2));
newUser.id = 4;

// 2) usare lo spread se l'oggetto contiene solo tipi primitivi , se all'interno abbiamo un oggetto verra passato per refernza 

/* 
const newUser2: any = {...user}  ;
newUser2.id = 4;
newUser2.address.city = "Roma"; // l'oggetto viene passato per reference 
console.log("oggetti dove i tipi primitivi vengono passati per valore , mentre gli oggetti per refernce : " ,{user,newUser2});
*/

// 3) usare lo structuredClone per cloanre un oggetto 

const newUser3 = structuredClone(user);
newUser3.id = 4;
newUser3.address.city = "Roma"; // l'oggetto viene passato per valore

console.log("oggetti passati per valore : ", { user, newUser3 });

// Scrivere una funzione che in modo ricorsivo trona una copia completa del mio oggetto fino al secondo livello 
// clone cosa deve fare :
// 1) entra dentro l'oggetto e vede che propieta ha 
// 2) per ogni propieta dovrei salvaore i valori primitivi 
// 3) se il valore non e primitivo 
const initialObj = { id: 3, name: 'Luca', address: { city: 'Catania' } };

function clone(obj: any) {
    // spunti :
    // Object.keys(obj)//....
    // Object.entries
    const newObject: any = {}

    /*
    // soluzione 1 , 2 for senza ricorsione 
    for (const [key1, value1] of Object.entries(obj)) {
        console.log(typeof value1, "value ")
        if (typeof value1 !== 'object') {
            newObject[key1] = value1
        } else if (obj[key1]) {
            for (const [key2, value2] of Object.entries(obj[key1])) {
                console.log(typeof value2, "value " , key2)
                if (typeof value2 !== 'object') {
                    newObject[key1] = { [key2] :value2}
                }
            }
        }
    }
    */

    /*
    // soluzione 2  1 for con ricorsione 
    for (const [key,value] of Object.entries(obj)) {
        console.log(typeof value , "value ")
        if(typeof value !== 'object' ){
                newObject[key] = value
        }else{
            newObject[key] = clone(value)
        }
    }
    */

    return newObject
}

const objClone = clone(initialObj);

objClone.id = 4;
// objClone.address.city = 'Roma';

console.log(" clone object function : ", { initialObj, objClone }); // i due oggetti sono diversi 

/*
type Item3<T> = string | Record<string , string | T>;
type Item = Record<string , string | Item3<string >>;

const a : Item = {prova : {prop : {a :'b'}}};
*/

export { };
