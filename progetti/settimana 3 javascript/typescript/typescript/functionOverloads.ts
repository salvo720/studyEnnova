(function () {
    /*
    Docs :
    function Overload  :  https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

    function Overload :
    un esempio di function overload sono gli oepratiri di rxjs ad esempio la funzione Map , 
    che puo accettare fino a 3 parametri , 
    come funziona : 
    definiamo l'intestaznione della funzione tante volte in base a quanti tipi di output ci sono , 
    e nell'ultima funzione andiamo a scrivere il body della funzione considerando di dover differenziare 
    in quale casistica siami : 1 o 2 o 3 ??????
    la discriminante e se sono presenti i parametri , quidni ci basta banalmente eseguire un chech su variablie !== undefined 


     */

    // vorrei scrivere una funzione che :
    //  - se ha 1 solo parametro eleva a potenza 
    //  - se ha 2 parametri li moltiplica;

    function prova(a: number): number; //eleva a potenza 
    function prova(a: number, b: number): number; // moltiplica 
    function prova(a: number, b: number, c: string): string; // moltiplica 
    function prova(a: number, b?: number, c?: string): number | string { //mette insieme le 2 casistiche 
        if (typeof b === 'undefined') {
            //1 casistica potenza 
            return a * a;
        }
        if (typeof c === 'undefined') {
            //2 casistica potenza 
            return a * b;
        }

        return `${c} ${a * b}`;
    }


    console.log(prova(2));
    console.log(prova(2, 2));
    console.log(prova(2, 2, "risultato 2*2"));


    // creiamo una function che ha lo scopo di inserire un elemento all'interno del DOM 
    // 

    const el = document.querySelector('#app');
    function createElement(): void; // crea un div vuoto e lo appende sul body 
    function createElement(elemento: string): void; // crea un article e lo appende nel body 
    function createElement(elemento: string, el: any): void; // crea un article e lo appende dentro el 
    function createElement(nuovoElemento?: string, parent?: HTMLElement): void {

        // codice livello master 
        // nota i nullish operator usato sui parametri opzionali 
        nuovoElemento = nuovoElemento ?? 'div';
        let elementoCreato = document.createElement(nuovoElemento!);
        elementoCreato.innerText = "sono un " + nuovoElemento;
        parent = parent ?? document.body;
        parent!.appendChild(elementoCreato);

        /* soluzione mia 

        // caso 1 parametri 0
        if (nuovoElemento === undefined && parent === undefined) {
            let elementoCreato = document.createElement("div");
            elementoCreato.innerText = "sono un div";
            document.body.appendChild(elementoCreato);
            return
        }

        // caso 2 parametri 1
        if (parent === undefined && nuovoElemento) {
            let elementoCreato = document.createElement(nuovoElemento!);
            elementoCreato.innerText = "sono un " + nuovoElemento!;
            document.body.appendChild(elementoCreato);
            return
        }
            
        // caso 3 parametri 2  
        let elementoCreato = document.createElement(nuovoElemento!);
        elementoCreato.innerText = "sono un " + nuovoElemento;
        parent!.appendChild(elementoCreato);
        */
    }

    console.log(createElement()); // crea un div vuoto e lo appende sul body 
    console.log(createElement('article')); // crea un div vuoto e lo appende sul body 
    console.log(createElement('article', el)); // crea un div vuoto e lo appende sul body 

})();