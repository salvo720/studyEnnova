/**
 * 
 - 1) Callback 
 - 2) promise 
 - 3) Destructuring , rest , spread 
 - 4) Api call 
 * 
 * 
 * 
 */

//  Callback : la callback e una funzione che viene richiamata da un altra funzione 
// che non consoce l'implementazione della funzione da chiamare 

(function () {

    const sumFn = function (first, second) {
        return first + second;
    }

    const log = function () {
        console.log("sono un console.log ")
    }
    // variabile         ==      indirizzo di memoria con quel valore 
    // "Via monserrato " == "pizza IN"


    // una variabile e il suo valore sono itercambiambiabili ovverro il valore della variabile , e 
    // uguale al valore della variabile 


    console.log("inizio esperimento alle : ", new Date().getTime())
    setTimeout(() => {

        console.log("sono un console.log ");
        console.log("Fine esperimento alle : ", new Date().getTime())

        // 1000 == 1_000 : sono uguali _ nei numeri e stato aggiunto con es 2020 
    }, 1000);

    // typeof : e una keyword di javascript che viene messo prima di una variabile , e ci ritonra il tipo del data 

    // Symbol : e un simbolo unico utilizzabile si usa per creare un indice del db 

    // il typeof di null ritorna object , per differenziali possimao usare la seguente funzione :
    const isNull = (value) => {
        return (typeof value === 'Object' && Boolean(value))
    }

    // proviamo a creare un fnCallback che richima una callback 

    function createCounterWithCallBack(initialNumber, callbackFn) {
        return function () {
            initialNumber++;
            console.log({ initialNumber, callbackFn }, typeof callbackFn)
            if (typeof callbackFn === 'function') {
                console.log(" la callback e una function ", callbackFn);
                callbackFn();
            }
            return initialNumber;
        }
    }

    const callbackFn = (number) => console.log(number);
    const count = createCounterWithCallBack(0, callbackFn);
    count();
    count();
    count();


    const callbackFnAlert = (number) => alert(number);
    const countAlert = createCounterWithCallBack(0,   );
    countAlert();


    // esercitazione :
    // scriver una function che prenda in input dall'utente un testo e in base alla callback passatta compia un azione ( console.log , alert , testo in upepr case  ,.... )

    function elaborateInputWith(callbackFn){
        //...
        let userVar;
        // userVar = prompt("inserisci il valore " , "asd"); 
        userVar = "asd"; 
        if(typeof userVar !== 'String'){
            return "il dato inserito non e del testo ";
        }
        return  callbackFn(userVar);
    }

    function textToUpperCase( text){
        text = String(text).toUpperCase();
        console.log({text,callbackFn});
        return text;
    }

    elaborateInputWith(alert) // fa un alert dell'input dell'utente 
    elaborateInputWith(console.log) // fa un alert dell'input dell'utente 
    // textToUpperCase(elaborateInputWith) // transforma il testo in upper case e lo logga 
    elaborateInputWith(textToUpperCase) // transforma il testo in upper case e lo logga 
})();