
// realizzare un coutner utilizzando la closure , 
// funzione che ritorna due funzioni 

function createCoutnerFrom(inizialNumber) {
    // i dati definiti qui dentro essendo una funzione che ritorna funzioni , 
    // i dati definiti come let saranno i punti di inizializzazione delle funzione 
    // ad esempio let count = inizialNumber; verra eseguito soltato una volta e le funzioni

    if (!Number.isInteger(inizialNumber)) {
        throw new Error("inizialNumber is not a valid number ")
    }

    let count = inizialNumber;

    // ritorno oggetto con piu funzioni 
    return {
        aumenta: function () {
            // valore + 1 ad ogni chiamata 
            count += 1;
            return count;
        },
        diminuisci: function () {
            count -= 1;
            return count;
        }
    }

}

const increment = createCoutnerFrom(10).aumenta;
console.log(increment()); //11
console.log(increment()); //12

const decrement = createCoutnerFrom(10).diminuisci;
console.log(decrement()); //9
console.log(decrement()); //8


// funzione pura : data un determinato input riceveremo semp lore stesso output 

// null : variabile con un valore che esiste ma che non e stato inizializzato 
// undefined : variabile che non e mai stata definita 
// 0 : la variabile e piena 
// console.clear();
(function () {
    const array = [1, 2, 3, 4, 5];

    const combinedArray = array.concat([6, 7, 8]); //1,2,3,4,5,6,7,8
    const sliced = array.slice(1, 3); // prende un pezzo dell'array , crea un Nuovo array :  2,3,4
    const spiced = array.splice(0, 2); // tagli un pezzo dell'array  , rimuove un indice e ne cancelliamo il valore : 2,3,4,5
    const joined = array.join('/') // Nuova Stringa :  2/3/4/5

    // Boolean methods
    const hasFive = array.includes(5); //true
    const indexOfOne = array.indexOf(1); //  //ritorna la posizione se lo trova , altrimenti ritorna -1 
    const lastindexOfOne = array.lastIndexOf(1); // 0

    // Ricerca Elemento 
    // find vuole passato un predicato che ritorna o un valore vero o un valore false 
    // un prediccato e quando esegue delle funzioni e ritorna l'elemento corrispondente 
    const findFive = array.find((element) => {
        return element === 5;
    });

    // tutti gli elementi degli array sono un predicato e accettano : element , index allArray , sempre in questo ordine 
    const someIsFive = array.some(function (number) {
        return number === 5;
    });

    // some per alcuni eleemnti almeno 1 
    const SomeIsFive = array.some(function (number) {
        return number === 5;
    });

    // every per alcuni eleemnti almeno 1 
    const EveryIsFive = array.every(function (number) {
        return number === 5;
    });

    const itemsLessThenFour = array.filter((item) => {
        return item < 4;
    }); //torna nuovo array 

    // filtrare tornando un nuovo array 
    const studenti = [{ name: "dario", age: 20 }, { name: "Denise", age: 18 }];
    const studentiSenior = studenti.filter((studente) => {
        return studente.age >= 20;
    })

    // i metodi di Es 6 non modificano l'array di partenza ma ne tornano uno nuovo ad esempio la funzione .filter 



    // modifcare creando un nuovo array 
    const studentiAges = studenti.map((studente) => studente.age)
    console.log({ studentiAges });
    const doubleArrayStudenti = array.map((item) => item * 2)
    console.log({ doubleArrayStudenti });

    console.log(
        ([1, 3, 4], [2], [3]).flat() //1,3,4,2,3
    );

    const doubleFn = (number) => number * 2;
    const doubleArray = array.map(doubleFn)


    // Boolean(4) 
    // sono uguali , ma il secondo e la shortend   
    // !!(4) // coversione di un intero in boolean 

    // Boolean(4) == !!(4)
    const BooleanFiltered = ['', 'prova', 'ciao', true, false, {}, []].filter(Boolean);
    console.log(`BooleanFiltered : ${BooleanFiltered}`)
})();

//Destructiring , Rest , Spread


(function () {
    const array = [];
    const array2 = new Array();
    const array3 = Array.from({ lenght: 5 });
    const array4 = Array.from("ciao");

    console.log(` array3 : ${array3}`);


    console.log(` array4 : ${array4}`);
    // tutto quello su cui funiona il for of e iterabile 
    for (const char of "ciao") {
        console.log({ char })
    }

    // MaiFare
    const arrayFor = array.map((item) =>
        console.log(`item ${item}`)
    )
    console.log(`arrayFor : ${arrayFor}`)

    const arrayforEach = array.forEach((item, index) => {
        if (index < 2) {
            console.log(`${item} foreach`)
            return;

        }
        console.log(`item :  ${item}`)
        console.log(`sono illegale `)
    })
    console.log(`arrayforEach : ${arrayforEach}`)
    // sara un array con 4 undefined perche map ritorna un valore e lo inserisce nell'array 
    // in questo caso non ritonrnado nulla javascript ritorna in modo implicito undefined 


    for (let index = 0; index < array.length; index++) {
        if (index < 2) {
            console.log(` ${array[index]} for `)
            continue;
        }
        const element = array[index];
        console.log(`sono illegale nel for `)
        break;
    }

    // reimplemartare il foreach , il map , filter 

    function forEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }

    // console.clear();
    const logFn = (item, index, array) => console.log(` foreach clone item: ${item} , index : ${index} array :  ${array} `);
    forEach([1, 2, 3], logFn);
    // -> { item; 1 , index : 0 , array : [1,2,3]}
    // -> { item; 2 , index : 1 , array : [1,2,3]}
    // -> { item; 3 , index : 2 , array : [1,2,3]}


    function map(array, callback) {
        let NewArray = new Array();
        let element;
        for (let i = 0; i < array.length; i++) {
            element = callback(array[i], i, array);
            element = element * 2;
            NewArray.push(element)
        }
        console.log(` map clone NewArray: ${NewArray} `)
        return NewArray;
    }

    const logmap = (element, index, array) => { console.log(` map clone element: ${element} , index : ${index} array :  ${array} `); return element };
    map([1, 2, 3], logmap);


    function filter(array, callback) {
        let NewArray = new Array();

        for (let i = 0; i < array.length; i++) {
            let elementofiltrato = callback(array[i], i, array) // passiamo tutti gli elementi al callback anche se non usati 
            if (elementofiltrato) {
                NewArray.push(array[i]);
            }
            console.log(` filter clone , array :  ${array} , NewArray : ${NewArray} `);
        }
        return NewArray
    }

    function isLessOne(element) {
        // usiamo return elemenet<1 perche ritorna un booleano , 
        // se usiamo l'if il valore 0 sara false e non sara ritornato 
        return element < 1;
    }

    console.log("filter :" + filter([0, -1, 1, 2, 3], isLessOne));

    function some(array, callback) {
        let ElemTrovato = false;

        for (let i = 0; i < array.length; i++) {
            // callback1(array[i], i, array,callback2);
            ElemTrovato = callback(array[i], i, array)
            console.log(` some clone , ElemTrovato :  ${ElemTrovato} `);

            if (ElemTrovato) {
                return ElemTrovato
            } else if (ElemTrovato == false && i == array.length) {
                return ElemTrovato
            }

        }
        return ElemTrovato
    }

    function isMoreOneBool(element) {
        // usiamo return elemenet<1 perche ritorna un booleano , 
        // se usiamo l'if il valore 0 sara false e non sara ritornato 
        return element > 1;
    }

    console.log("some :" + some([1, 2, 3], isMoreOneBool));


    function every(array, callback) {
        let counter = 0;
        let ElemComparato = false;

        for (let i = 0; i < array.length; i++) {
            // callback1(array[i], i, array,callback2);
            ElemComparato = callback(array[i], i, array)
            console.log(` every clone , ElemComparato :  ${ElemComparato} `);

            // guard codicntion
            if (ElemComparato == false) {
                return false
            }

            if (ElemComparato) {
                counter++;
            } else if (ElemComparato && counter == array.length) {
                return ElemComparato
            } else {
                return false;
            }
        }
    }

    function isMoreOneBool(element) {
        // usiamo return elemenet<1 perche ritorna un booleano , 
        // se usiamo l'if il valore 0 sara false e non sara ritornato 
        return element > 1;
    }

    console.log("every :" + every([1, 2, 3], isMoreOneBool));


    function find(array, callback) {
        let ElemComparato = false;

        for (let i = 0; i < array.length; i++) {
            // callback1(array[i], i, array,callback2);
            ElemComparato = callback(array[i], i, array)
            console.log(` find clone , ElemComparato :  ${ElemComparato} `);

            if (ElemComparato) {
                return array[i]
            }

            if (ElemComparato == false && counter == array.length) {
                return false
            }
        }
    }

    function isMoreOneBool(element) {
        // usiamo return elemenet<1 perche ritorna un booleano , 
        // se usiamo l'if il valore 0 sara false e non sara ritornato
        if(element ==1){
          return element
        }
       
    }

    find([1, 2, 3], isMoreOneBool);



    function findLast(array, callback) {
        let ElemComparato = false;
        let counter =array.length;
        for (let i = array.length; i > 0; i--) {
            // callback1(array[i], i, array,callback2);
            ElemComparato = callback(array[i], i, array)
            console.log(` findLast clone , ElemComparato :  ${ElemComparato} , ed i vale : ${i}`);

            if (ElemComparato) {
                return array[i]
            }

            if (ElemComparato == false && counter == array.length) {
                return false
            }
        }
    }

    function isUgualtree(element) {
        // usiamo return elemenet<1 perche ritorna un booleano , 
        // se usiamo l'if il valore 0 sara false e non sara ritornato
        if(element == 3){
          return element
        }
       
    }

    findLast([1, 2, 3], isUgualtree);

    // _ : e una convenzione per indicare un parametro che non verra utilizzato nei parametri 


})();