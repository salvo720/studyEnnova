document.addEventListener("DOMContentLoaded", () => {

let head = document.head;
let body = document.body;
let div = document.getElementById("img");
let ptag = document.getElementsByTagName("p"); // getElmentByTag name ritorna un array 

console.log(head)
console.log(body)

let title = document.createElement("title");
title.innerText = " titolo prova "
document.head.appendChild(title);


let h1 = document.createElement("h1");
h1.innerText = " testo di prova "
body.appendChild(h1);

let p = document.createElement("p");
p.innerText = " testo di prova "
body.appendChild(p);


let p1 = document.createElement("p");
p1.innerText = "testo di prova "
div.appendChild(p1);


let p2 = document.createElement("p");
p2.innerText = "testo di prova "
ptag[2].appendChild(p2);

//
});