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