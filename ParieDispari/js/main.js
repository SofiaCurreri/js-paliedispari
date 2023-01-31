// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

function numRandom(numero) {
    numero = Math.floor((Math.random() * 5) + 1);
    return numero;
}

function PariDispari(addizione) {
    if (addizione % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

do {
    var choice = prompt("Pari o Dispari?");
} while ((choice != "Pari") && (choice != "Dispari"));


const numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

let numComputer;
console.log(numRandom(numComputer));

const somma = numUtente + numRandom(numComputer);
console.log(PariDispari(somma));

if (((PariDispari(somma)) && (choice == "Pari")) || ((!PariDispari(somma)) && (choice == "Dispari"))) {
    console.log("Ha vinto l' utente");
} else {
    console.log("Ha vinto il computer");
}