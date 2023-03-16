(function () {

    console.clear();
    const promiseHandler = function (resolve, reject) {
        try {
            for (let index = 0; index < 1_000; index++) {
                console.log("ciao");
                return resolve("1000 x Ciao");

            }
        } catch (Exception) {
            console.error("Exception : ", Exception);
            return reject(Exception);

        }
    }
    const promise = new Promise(promiseHandler);
    console.log(typeof promise);

    // dopo aver aperto una promise l'unico modo per lavorare con le promise e dentro il loro metodi 
    // non potremo mai prendere il risultato della promise 
    promise // promise iniziale 
        .then((result) => { console.log("result : ", result); return "pippo" })  // ritorno di una nuova promise 
        .then((value) => console.log("value : ", value))  // ritorno di una nuova promise 
        .catch((error) => console.error("error : ", error)) // ritorno di una nuova promise 
        .finally((whatever) => console.info("whatever : ", whatever)) // ritorno di una nuova promise 

    // bad 
    /**
     * 
    const response =  promise // promise iniziale 
    .then((result) => console.log)  // ritorno di una nuova promise 
    .catch((error) => console.error) // ritorno di una nuova promise 
    .finally((whatever) => console.info) // ritorno di una nuova promise 

    console.log(response);
     */

    // then()  su una promise viene eseguito quando los tato e fullfilled 

    // debugger; // e il breakpoint scritto da codice 

    console.log("ho finito tutto ");

    // Promise caso d'uso 
    // quano abbimo concorrenza tra due processi asyncroni quello che finisce prima 
    // e si rivolte viene ritonato 

    let div = document.querySelector(".fetch");
    let div2 = document.querySelector(".fetch2");
    // console.log(div);

    const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5";
    console.log("...loading ")
    // chiamare l'api sui gatti e recuperare in ongi elemento che ci viene restituito 
    fetch(url)
        .then((response) => response.json())
        .then((res) => {
            console.log("res : ", res)
            // inserire a schermo tutti e 5 i testi che avremo a disposizione 
            res.forEach(element => {
                let p = document.createElement("p");

                p.innerText = element.text;
                div.append(p);
            });

            // il map crea un nuovo array andando ad avere piu dispendio di memoria rispetto al foreach 
            res.map(element => {
                let p = document.createElement("p");

                p.innerText = element.text;
                div2.append(p);
            });
        })
        .catch(function (error) {
            console.error(" Errore durante la fetch ", error)
        })
        // stampare un console log che dice che abbiamo fatto tutto 
        .finally((whatever) => { whatever = "ho fatto tutto"; console.info("whatever : ", whatever) })


    // impostare un loader nel nostro html 
    // chiamare l'api sui gatti e recuperare in ongi elemento che ci viene restituito 
    // inserire a schermo tutti e 5 i testi che avremo a disposizione 
    // stampare un console log che dice che abbiamo fatto tutto 

    // document.body.innerHTML = 'HTML'; // stampare dentro il body , usando scovrascriviamo il document

})();