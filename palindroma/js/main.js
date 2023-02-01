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




//SOLUZIONE ALTERNATIVA
// function checkPalindromo(parola) {
//     let reverseWord = "";
//     const lun = parola.length;
//     for (let i = 0; i < lun; i++) {
//         reverseWord = parola[i] + reverseWord;
//     }
//     if(parola == reverseWord) {
//        return true;
//      }
//
//      return false;
// }

//O ANCORA SI PUO USARE DECREMENTO E CONTROLLARE CHE PAROLA SCRITTA AL CONTRARIO E PAROLA DATA SIANO UGUALI