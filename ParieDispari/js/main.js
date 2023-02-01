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

function PariDispari(somma) {
    if (somma % 2 == 0) {
        return true;
    }

    return false;
}



let choice;
do {
    choice = prompt("Pari o Dispari?");
} while ((choice != "Pari") && (choice != "Dispari"));


const numUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Utente: ", numUtente);

let numComputer;
const numRandomico = numRandom(numComputer);
console.log("Random: ", numRandomico);

const somma = numUtente + numRandomico;
console.log("Somma: ", somma);
console.log(PariDispari(somma));

if (((PariDispari(somma)) && (choice == "Pari")) || ((!PariDispari(somma)) && (choice == "Dispari"))) {
    console.log("Ha vinto l' utente");
} else {
    console.log("Ha vinto il computer");
}