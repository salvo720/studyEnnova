(function () {

    const obj = {
        name: "Luca",
        skills: ['JS', 'TS'],
    };


    const { name, skills } = obj;
    console.log({ name, skills });

    const { lenght } = skills;
    console.log({ lenght });


    const [first, second] = skills;
    // first = skills[0]
    // second = skills[1]
    console.log({ first, second });


    // const [first,  , third ] = skills;
    // first = skills[0]
    //  = skills[1]
    // third = skills[1]

    console.log({ obj });

    const facts = [{ id: '0', text: 'Miao' }, { id: '1', text: 'Bau' }];
    facts.forEach((element, index, array) => {
        const { text } = element;
        // array { }

        // if (text === firstItem.text) {
        //     console.log("sei il primo item o qualcosa che fa maio")
        // }
    });









})();

(function () {
    // spread /Rest ""...." 

    const ranking = [
        { positioning: 1, name: "luca", points: 100 },
        { positioning: 2, name: "luca", points: 90 },
        { positioning: 3, name: "luca", points: 80 },
        { positioning: 4, name: "luca", points: 75 },
        { positioning: 5, name: "luca", points: 36 },
    ];

    const [first, secondR, third, ...other] = ranking;
    console.log({ first, secondR, third, other });

    // il rest operator deve essere sempre l'ultimo elemento   
    // lo spread e un array per questo puo accettare parametri multipli  
    const { name, ...rankDatas } = ranking;
    console.log({ name, rankDatas });
    const rankingTail = [
        { positioning: 5, name: "luca", points: 36 },
        { positioning: 5, name: "luca", points: 36 },
    ];

    const newRanking = [
        ...ranking,
        ...rankingTail
    ];

    console.log({ newRanking });


    const person = { name: 'peppino', age: 99 };
    const player = { ...person, positioning: 8, points: 0 };

    console.log({ person, player });

    // esempio codice react 
    // const [state,] = useState(); // --> value function 






})();

(function () {
    // Fibonacci 

    // [0 1] 1 2 3 5 8 13 

    // il primo numero della serie e sempre 1 e il secondo e sempre 1 
    const sommaFibonacci = function (NumeroPrecedente, NumeroAttuale) {
        return NumeroPrecedente + NumeroAttuale;
    }

    function getFibonacci(n) {

        const arrayFibonacci = [0, 1];
        console.log(typeof n)
        if (typeof n === 'number') {

            if (n == 1 || n == 2) {
                // ritorno 0 e 1 
                return arrayFibonacci[n-1];
            }

            let index = arrayFibonacci.length;
            while (index < n) {
                let indexPrecedente = index - 2;
                let num = sommaFibonacci(arrayFibonacci[indexPrecedente], arrayFibonacci[index-1]);
                arrayFibonacci.push(num);
                console.log(  index , arrayFibonacci[index]                )
                console.log(   arrayFibonacci                )
                index++;
            }

            let lastIndex = index -1 ;
            return arrayFibonacci[lastIndex];


        }


        function getFibonacciRicorsiva(n){

            let Elemento1 = 0, Elemento2 = 1;
            if (n == 1 ){
                return 1;
            }
            else if (n == 2) {
                return 1;
            }

            // let Elemento1 , Elemento2 ;   

            
            return Elemento1+ Elemento2 ;

        }

        
        function getFibonacciConReduce(n){

            if(Number.isInteger(n) && n < 0 ) {
                return "inserisci un valore valido ";
            }

            return (Array.from({lenght:n}).reduce((acc , item , index , array )=>{
                if((n-1) === index) {
                    return acc[n-1];
                }

                const ultimo = acc.at(-1);
                const penultimo = acc.at(-2);
                const sum = penultimo + ultimo ;
                return [ultimo ,sum] ;
            } , [0,1]));

            // .at(-1) // prende l'lultimo numero di un array 

        }



    }


    console.log("fibonacci : " + getFibonacci(8)) // 0 --> statico
    // getFibonacci(1) // 0 --> statico
    // getFibonacci(2) // 1 --> statico
    // getFibonacci(3) // 1 --> dinamico
    // getFibonacci(4) // 2 --> dinamico
    // getFibonacci(8) // 13 --> dinamico


})();

