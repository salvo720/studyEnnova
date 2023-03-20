(async function () {
    // le cosntatni vengono definite in maiuscolo e con gli _ per separare le pareole 
    const CAT_FACTS_ENDPOINT = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat";

    // const userNumber = Number(prompt());
    // const AUREA_CONSTANT_NUMBER = 1.6180339887;
    // console.log(userNumber / AUREA_CONSTANT_NUMBER);

    // async e await vengono usati in coppia async nella funzione e await dove si va ad aspettare 
    // usando async e await possiamo prende la risposta di una fetch e popolare una variabile , 
    // ricorda che per effettuare una cosa di questo tipo il then deve ritornare un valore altrmenti la variabile sara undefined 
    async function getCatFacts(count: number) {
        const facts = await fetch(`${CAT_FACTS_ENDPOINT}&amount=${count}`)
            .then(res => res.json())
            .then(json => { console.log('json dentro il then()', json); return json; })
            .finally();

        console.log('dopo la chiamata', { facts });

        return facts;

        /*
        try {
            const request = await fetch(`${CAT_FACTS_ENDPOINT}amount&${count}`)
            //.json e un metodo che ritorna una promise 
            const facts = await request.json();
            return facts;
        } catch (error) {
            console.log("Mio Errore " + error);
        } finally {
            console.log("ciao");
            return 'pippo';
        }
        */
    }

    const response = await getCatFacts(5);
    console.log('await getCatFacts(3)', response);
    console.log('getCatFacts(3)', getCatFacts(3)) // questo ritonerebbe una promise pendente e per risolverlo abbiamo 2 possibilita :
    // 1) aggiungere un then dopo la chiamata 
    // console.log(getCatFacts(3).then())
    // 2) usare asycn e await nella funzione 
    // async function ( { await getCatFacts(3) }) 


    async function fetchUrl(url: any) {
        return await fetch(url).then(res => res.json())
    }

    try {
        return fetchUrl(`${CAT_FACTS_ENDPOINT}&amount=3`)
    } catch (error) {
        console.log("Mio Errore " + error);
    } finally {
        console.log("ciao");
        return 'pippo';
    }





})();


(async function () {

    // Scrivere una function che metta in pausa il codice 
    // per un tempo definito dal suo uncio parametro

    const pauseFor = async function (time: number) {
        const PromiseAwait:any = await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                console.log("i 10 secondi sono passati  ")
                resolve()
            }, time);

            return PromiseAwait
        });
    }
    
    // 9:00:00
    console.log(` attesa prima dell'await  new Date().getMilliseconds() `, new Date().getMilliseconds());
    await pauseFor(10_000);
    // 9:00:10
    console.log(` attesa dopo dell'await  new Date().getMilliseconds()`, new Date().getMilliseconds());

})();


export { }







