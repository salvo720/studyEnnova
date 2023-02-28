
function js() {
    let td = document.getElementsByTagName("td");
    let div = document.getElementsByTagName("div");


    td[0].addEventListener("click", function () {
        appendivalore(7);
    });

    td[1].addEventListener("click", function () {
        appendivalore(8);
    });

    td[2].addEventListener("click", function () {
        appendivalore(9);
    });

    td[3].addEventListener("click", function () {
        appendivalore("(");
    });

    td[4].addEventListener("click", function () {
        appendivalore(")");
    });

    td[5].addEventListener("click", function () {
        appendivalore(4);
    });

    td[6].addEventListener("click", function () {
        appendivalore(5);
    });

    td[7].addEventListener("click", function () {
        appendivalore(6);
    });

    td[8].addEventListener("click", function () {
        appendivalore("x");
    });

    td[9].addEventListener("click", function () {
        appendivalore("÷");
    });

    td[10].addEventListener("click", function () {
        appendivalore(1);
    });

    td[11].addEventListener("click", function () {
        appendivalore(2);
    });

    td[12].addEventListener("click", function () {
        appendivalore(3);
    });

    td[13].addEventListener("click", function () {
        appendivalore("+");
    });

    td[14].addEventListener("click", function () {
        appendivalore("-");
    });

    td[15].addEventListener("click", function () {
        appendivalore(0);

    });

    td[16].addEventListener("click", function () {
        appendivalore(".");
    });

    td[17].addEventListener("click", function () {
        let string = div[0].textContent;
        let operazioni = ["+", "-", "x", "÷"];
        let operazioneTrovata = false;
        let posOperazione;
        let operazione

        console.log(string)
        operazioni.forEach(element => {
            if (operazioneTrovata == true) {
                return posOperazione
            }
            posOperazione = string.indexOf(element);
            operazione = string[posOperazione];
            console.log(posOperazione)
            if (posOperazione != -1) {
                operazioneTrovata = true
            }


        });

        console.log(" a", posOperazione)
        let valore1 = 0, valore2 = 0;
        if (posOperazione != -1) {
            valore1 = string.slice(0, posOperazione);
            valore2 = string.slice((posOperazione + 1), (posOperazione.lenght))
            // conversione int valori 
            valore1 = parseInt(valore1);
            valore2 = parseInt(valore2);
        }

        let risultato
        console.log(operazione)
        switch (operazione) {
            case "+":
                puliscitesto();
                risultato = valore1 + valore2;
                console.log(risultato)
                appendivalore(risultato);
                break;
            case "-":
                puliscitesto();
                risultato = valore1 - valore2;
                appendivalore(risultato);
                ;
                break;
            case "x":
                puliscitesto();
                risultato = valore1 * valore2;
                appendivalore(risultato);
                break;
            case "÷":
                puliscitesto();
                risultato = valore1 / valore2;
                appendivalore(risultato)
                break;
            default:
                break;
        }
    });


    function appendivalore(valore) {
        div[0].append(valore);
    }

    function puliscitesto() {
        div[0].textContent = '';
    }



}