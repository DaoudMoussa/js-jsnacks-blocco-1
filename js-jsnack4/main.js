// JSnack 4
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var oddNumberBox = [];

for (var i = 0; i < 6; i++) {

    var numeroInserito = parseInt(prompt("Inserisci un numero"));

    while(isNaN(numeroInserito)) {
        numeroInserito = parseInt(prompt("Il dato inserito non é valido. Inserire nuovamente il numero " + (i + 1)));
    }

    console.log("Il " + (i + 1) + "° numero inserito é: " + numeroInserito);

    if (numeroInserito % 2 != 0) {
        oddNumberBox.push(numeroInserito);
    }
}

console.log(oddNumberBox);
