"use strict";

class Army{

    constructor(name, quantity, idBlock) {
        this.name = name;
        this.quantity = quantity;
        this.surrender = false;
        this.HTMLContent = document.getElementById(idBlock);
        this.setHeader();
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setQuantity(quantity){
        this.quantity = quantity;
    }

    getQuantity(){
        return this.quantity;
    }

    getHTMLContent(){
        return this.HTMLContent;
    }

    getSurrender(){
        return this.HTMLContent;
    }

    setHeader(){
        this.HTMLContent.querySelector('.header h2 span').innerText = this.name;
        this.HTMLContent.querySelector('.header p.quantity span').innerText = this.quantity;
        this.HTMLContent.querySelector('.header p.status span').innerText = 'Ready to Fight';
    }

    setFinalHeader(result){
        this.HTMLContent.querySelector('.header p.status span').innerText = result;
    }

    launchDice(){

        let dice;

        if(this.quantity === 1){
            dice = [
                Math.floor(Math.random() * 6) + 1,
                0,
                0
            ];
        }
        else if (this.quantity === 2){
            dice = [
                Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1,
                0
            ];
        }
        else {
            dice = [
                Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1,
                Math.floor(Math.random() * 6) + 1
            ];
        }

        dice = dice.sort().reverse();

        let element = this.HTMLContent.querySelectorAll('.soldiers .result');

        for(let i = 0; i < dice.length; i++){
            if(dice[i] === 0) element[i].innerText = 'X';
            else element[i].innerText = dice[i];
        }

        return dice;
    }

    surrenderChoose(quantity){
        this.surrender = quantity > this.quantity*3;
        if(this.surrender) this.HTMLContent.querySelector('.header p.status span').innerText = "Surrender";
        return this.surrender;
    }
}

var army1;
var army2;

async function battle() {

    // eseguo il lancio dei dadi dei due eserciti
    let diceArmy1 = army1.launchDice();
    let diceArmy2 = army2.launchDice();

    let defeatArmy1 = 0;
    let defeatArmy2 = 0;

    for(let i = 0; i < diceArmy1.length; i++){

        if(diceArmy1[i] > 0 && diceArmy2[i] > 0) {
            if(diceArmy1[i] < diceArmy2[i]){
                defeatArmy1++;
            }

            if(diceArmy1[i] > diceArmy2[i]){
                defeatArmy2++;
            }
        }
    }

    console.log('sconfitte Esercito 1:' + defeatArmy1);
    console.log('sconfitte Esercito 2:' + defeatArmy2);

    let newQuantityArmy1 = army1.getQuantity() - defeatArmy1;
    let newQuantityArmy2 = army2.getQuantity() - defeatArmy2;

    army1.setQuantity(newQuantityArmy1);
    army2.setQuantity(newQuantityArmy2);

    army1.setHeader();
    army2.setHeader();

    if(army1.surrenderChoose(army2.getQuantity()))
        throw 'Army1 Surrender';

    if(army2.surrenderChoose(army1.getQuantity()))
        throw 'Army2 Surrender';

}

function calculateVictory(){

    let fightButton = updateBattleCounter();
    if(army1.getQuantity() === 0){
        army2.setFinalHeader("Winner");
        army1.setFinalHeader("Loser");
        fightButton.setAttribute('disabled',true);
    }

    if(army2.getQuantity() === 0){
        army1.setFinalHeader("Winner");
        army2.setFinalHeader("Loser");
        fightButton.setAttribute('disabled',true);
    }
}

function surrenderResult(){
    let fightButton = updateBattleCounter();
    if(army1.getSurrender()) army2.setFinalHeader("Winner");
    else army1.setFinalHeader("Winner");

    fightButton.setAttribute('disabled',true);
}

function updateBattleCounter(){
    let fightButton = document.getElementById('battle');
    let battleCounter = parseInt(fightButton.getAttribute('data-battleCounter')) + 1;
    fightButton.setAttribute('data-battleCounter', battleCounter);
    fightButton.innerText = 'Fight (' + battleCounter  + ')';
    return fightButton;
}

(function(){

    let startQuantity = prompt('Dammi le armate iniziali?');
    //let army1Quantity = prompt('Dammi le armate iniziali dell\'esercito 1?');
    //let army2Quantity = prompt('Dammi le armate iniziali dell\'esercito 2?');

    army1 = new Army('Australian', startQuantity, 'army1');
    army2 = new Army('Emu', startQuantity, 'army2');

    let fightButton = document.getElementById('battle');
    fightButton.setAttribute('data-battleCounter', 0);
    fightButton.onclick = function(){
        battle().then(
            function(value) { calculateVictory() },
            function(error) { surrenderResult(); }
        );
    };

})();