"use strict";

class Army {

    constructor(name, quantity, idBlock) {
        this.name = name;
        this.quantity = quantity;
        this.surrender = false;
        this.HTMLContent = document.getElementById(idBlock);
        this.setHeader();
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
    }

    getQuantity() {
        return this.quantity;
    }

    getHTMLContent() {
        return this.HTMLContent;
    }

    getSurrender() {
        return this.HTMLContent;
    }

    setHeader() {
        this.HTMLContent
            .querySelector('.header h2 span').innerText = this.name;
        this.HTMLContent
            .querySelector('.header p.quantity span').innerText = this.quantity;
        this.HTMLContent
            .querySelector('.header p.status span').innerText = 'Ready to Fight';
    }

    setFinalHeader(result) {
        this.HTMLContent
            .querySelector('.header p.status span').innerText = result;
    }

    launchDice() {
        // Function to generate random number between 1 and 6 
        let dice = parseInt(Math.random() * (6 - 1) + 1);
        return dice;
    }

    surrenderChoose(quantity) {
        this.surrender = quantity > this.quantity * 3;
        this.HTMLContent.querySelector('.header p.status span')
            .innerText = "Surrender";
        return this.surrender;
    }
}



var army1;
var army2;

// dichiaro nuovo attributo con prototype
Army.prototype.risultati = [];

async function battle() {
    // Eseguire la battaglia implementando il metondo launchDice

    new Promise((reject, resolve) => {


        for (let i = 0; i <= 2; i++) {
            army1.risultati.push(army1.launchDice());
            army2.risultati.push(army2.launchDice());
        }

        let soldati = document.getElementsByClassName("result");

        for (let i = 0; i < army1.risultati.length; i++) {
            soldati[i].innerText = army1.risultati[i]
        }



        // army 1 e da 0 a 2 e army2 e da 3 a 5
        let armata1 = 0
        for (let armate2 = 3; armate2 <= 5; armate2++) {

            if (parseInt(soldati[armata1].innerText) > parseInt(soldati[armate2].innerText)) {
                army1.quantity--;

            } else if (parseInt(soldati[armata1].innerText) < parseInt(soldati[armate2].innerText)) {
                army2.quantity--;

            }
            armata1++;
        }
        resolve("promise eseguita con successo ")
    })

}


(function () {

    let startQuantity = prompt('Dammi le armate iniziali?');
    //let army1Quantity = prompt('Dammi le armate iniziali dell\'esercito 1?');
    //let army2Quantity = prompt('Dammi le armate iniziali dell\'esercito 2?');

    army1 = new Army('Australian', startQuantity, 'army1');
    army2 = new Army('Emu', startQuantity, 'army2');

    let fightButton = document.getElementById('battle');
    fightButton.setAttribute('data-battleCounter', 0);
    fightButton.onclick = function () {
        battle().then(
            resa(),

            // Dopo la battaglia verificare la vittoria o la resa di una delle due armate e assegnare la vittoria
        ).catch(function (e) {
            console.error("errore nella promise " + e.message)
        });
    };

    function resa() {
        if (army1.quantity < 3) {
            army1.surrender()
        } else if (army2.quantity < 3) {
            army2.surrender()
        }
    }
})();