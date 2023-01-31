// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


function checkPalindromo(parola) {

    const lun = parola.length;
    for (let i = 0; i < lun / 2; i++) {
        if (parola[i] != parola[lun - i - 1]) {
            return ("La parola non è palindroma");
        }
    }
    return ("La parola è palindroma");
}

const word = prompt("Inserisci una parola");
console.log(checkPalindromo(word));