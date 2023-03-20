/* Docs : 
    convenctional commit link : ( https://www.conventionalcommits.org/en/v1.0.0/ )
    fireship ( tecnologie in 100 s ) : https://fireship.io/ 
    typescript :  https://www.typescriptlang.org/docs/handbook/utility-types.html
    codewar : https://www.codewars.com/ 
*/

// i parametri opzionali sono semrpe nella coda della funzione
function somma(a: number, b: number): number {
    return a + b;
}

/* bad 
function somma(a?:number,b:number):number{
    return a+b;
}
*/


/* good 
function somma(a:number,b?:number):number{
    return a+b;
}
*/

const output = somma(3, 2);


function restSum(...numbers: number[]): number {

    return numbers.reduce((acc, number) => number + acc);

}

const output2 = restSum(3, 2);
console.log(output);


type User = { name: string, email: string }
const user: User = { name: '', email: 'a@gmail.com' }

function saveUser(User: User) {
    const { name } = user;
    console.log({ name });

}


type Coordinate = { x: number, y: number };

function getCoordinate(coordinate: Coordinate) {
    console.log("coordinator x is : ", coordinate.x)
    console.log("coordinator y is : ", coordinate.y)
}
type paramas = {
    id: "",
    title: ""
    description: ""
}

/* bestParctice
per rendere il codice piu robusto passiamo un oggetto alla funzione 
invece di passare i singoli parametri e  quando lo dovremo modificare in futuro dovremo 
cambiare solo l'oggeto di quella funzione e non posizione tutti i parametri 

const bestParctice = function (params:paramas){
    const {id,title,description} = params;
    console.log(id,title,description);
}

let object={id:"id" ,title:"title",description:"description"};
bestParctice({object});
*/


// as 
// indica che quell'elemento e del tipo indicato sull'as , 
// typescript non andra ad effettuare dei check , ma lo prendera per buono 

// Esercizio 

function isBetween(string: string, starting: number, ending: number, toFind: string) {
    // scriviamo una funzione che ci permette di capirese se "tofind" 
    // si trova tra i cartteri starting e ending di una stringa

    if (starting > string.length - 1 || ending > string.length - 1) {
        return "inserisci dei valori validi ";
    }

    for (let index = starting; index <= ending; index++) {
        const element = string[index];
        if (toFind == element) {
            return true;
        } else if (index == ending) {
            return false
        }
    }

}

// isBetween('ciao',0,3,'a') //true
console.log(isBetween('ciao', 0, 3, 'a')) //true
console.log(isBetween('superasddddddd', 0, 3, 'a')) //false




function isBetween2(string: string, starting: number, ending: number, toFind: string) {
    // scriviamo una funzione che ci permette di capirese se "tofind" 
    // si trova tra i cartteri starting e ending di una stringa

    if (starting > ending || starting > string.length - 1) {
        return "inserisci dei valori validi ";
    }

    // taglio la stringa con slice e poi cerco il valore 
    //    return string.slice(starting,ending).indexOf(toFind)==-1 ? false: true;
    return string.slice(starting, ending).includes(toFind);

}

// isBetween2('ciao',0,3,'a') //true
console.log(isBetween2('ciao', 0, 3, 'a')) //true
console.log(isBetween2('superasddddddd', 0, 3, 'a')) //false

function bingo(): Array<number> {
    let max = 90, min = 0, numeriRichiest = 6, array: number[] = [];
    let range = (max - min) + 1;
    for (let index = 0; index < numeriRichiest; index++) {
        let numero: number = Math.floor(Math.random() * range + min);
        if (!array.find((element) => element == array[index])) {
            array[index] = numero;
        }
    }
    return array;
}

console.log(bingo()); // [4,42,78,62,43,76]

//bingooneLine
function bingooneLine(): Array<number> {
    const numbers = Array.from({ length: 90 }, (_, i) => i + 1);
    console.log({ numbers });
    return numbers.slice(0,6);
}

console.log(bingooneLine()); // [4,42,78,62,43,76]


// contare quanto cerchi sono presenti all'interno del numero o stringa 
// 8--> 2 
// 9--> 1
// 6--> 1
// 0--> 1

function circleCounter(number: number | string): number {
    // console.log(number.indexOf("8"));
    let counterNumb = 0;
    for (let index = 0; index < number.toString().length; index++) {
        const element = number.toString()[index];

        if (element == "8") {
            counterNumb += 2;
        } else if (element == "6" || element == "9" || element == "8") {
            counterNumb += 1;
        }

    }
    return counterNumb;
}

console.log(circleCounter(283489234923)); // [4,42,78,62,43,76]


// function circleCounter2(number: number | string): number {
//     // console.log(number.indexOf("8"));
//     let counterNumb = 0;
   
//     let testObj : Object= { "0":1 , "6":1 , "8":2 , "9":1}

//     Object.values(testObj).forEach((val,index) => {
//         if(val == )
//         counterNumb++;
//       });
    
//     // number.toString().
//     return counterNumb;
// }

// console.log(circleCounter2(283489234923)); // [4,42,78,62,43,76]




function circleCounter2(number: number | string): string {
    const resultMap : any = { "0":1 , "6":1 , "8":2 , "9":1}
    // Soluzione 1 
    /*
    let output : number = 0
    for (const char of `${number}` ) {
        output += resultMap[char] ?? 0;
    }
    return output;
    */

    // Soluzione 2 
    // from richiede un iterablie e string e un iterabile 
    return Array.from( `${number}`).reduce((acc,char) => {
        return acc + (resultMap[char] ?? 0)
    });
    
}

console.log(circleCounter2(283489234923)); // [4,42,78,62,43,76]


function getNumberDestructured(number: number | string): Array<number> {
    // console.log(number.indexOf("8"));
    let stringaZero = "0";
    let arrayNumber : number[]=[];
    number = String(number);
    for (let index = (number.length -1) ; index>=0; index--) {
           let element = parseInt(number[index].padEnd(index,stringaZero));
        arrayNumber[index] = element;
    }
    return arrayNumber;

   
    /* soluzione 1 
     * 
     const numbers = Array.from(`${number}`);
    const reverseNumbers = numbers.reverse();
    const reverseNumbersWithZeros = reverseNumbers.map((number,index) => {
        // return `${number}` + `0`.repeat(index);
        return `${number}`.padEnd(index +1 , "0");
    });
    return reverseNumbersWithZeros.join("+");

     */


    /** soluzione 2 
     * 
     * 
        const initialValue : Array<string> = [];
        return Array.from( `${number}`).reduce((acc,_,index,array) => {
        const reversedChar = array[array.length -index - 1];
        return acc + (index=== 0 ? '': ' + ') + `${number}` + "0".repeat(index);
    }, initialValue); 
     */


}


console.log("getNumberDestructured : " ,getNumberDestructured(325243)); // 3 + 40 + 200 + 5000 + 20000 + 300000
getNumberDestructured(743) // 3 + 40 +700;


// trovare la cifra piu piccola di un numero 

// transformo il numero in stringa che e un iterabile , e successivamente la stringa in array , grazie alla funzione Array From 
const chars = Array.from(String(34534545), number => parseInt(number)); // (item , index , array )
// uso la funzione Math.min() per trovare il valore minimo , e uso lo spread operator per passsare piu valori 
const minNumber = Math.min(...chars);
// effettuo il console.log() del numero piu piccolo 
console.log( "minNumber :" , minNumber , " chars.indexOf(minNumber) : ", chars.indexOf(minNumber));


// reduce() : 
// la funzione reduce ritorna un elemento che viene chiamato accumulatore , infatti nelal funzione abbioamo (acc,element,index,array)
// l'accumulatore andra a contenere i valori che ritorniamo nel reduce 
// esempio :
// const accumulatorefinale = {} 
// reduce ((acc,element,index,array){
//     return acc + element 
// }, accumulatorefinale)
