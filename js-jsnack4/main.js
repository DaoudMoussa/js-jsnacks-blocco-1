// JSnack 4
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

//Creazione array vuoto
var oddNumberBox = [];

for (var i = 0; i < 6; i++) {
    // Salvataggio input in una variabile
    var numeroInserito = parseInt(prompt("Inserisci un numero"));

    //Controllo che l'input sia un numero e rinserimento
    while(isNaN(numeroInserito)) {
        numeroInserito = parseInt(prompt("Il dato inserito non é valido. Inserire nuovamente il numero " + (i + 1)));
    }

    // stampa numero inserito
    console.log("Il " + (i + 1) + "° numero inserito é: " + numeroInserito);

    // inserimento nell'array in caso il numero inserito sia dispari
    if (numeroInserito % 2 != 0) {
        oddNumberBox.push(numeroInserito);
    }
}

// stampa array
console.log(oddNumberBox);
