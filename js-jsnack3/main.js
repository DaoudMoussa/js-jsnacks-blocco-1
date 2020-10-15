// JSnack 3: Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;

for (var i = 0; i < 5; i++) {
    //inserimento numero
    var numeroInserito = parseFloat(prompt("inserire il numero " + (i + 1)));
    //verifica che línput sia effettivamente un numero
    while(isNaN(numeroInserito)) {
        numeroInserito = parseFloat(prompt("Il dato inserito non é valido. Inserire nuovamente il numero " + (i + 1)));
    }
    console.log("Il " + (i + 1) + "° numero inserito é: " + numeroInserito);
    // somma del valore precedente di somma con il numero inserito in questa iterazione del ciclo for
    somma = somma + numeroInserito;
}

// stampa del valore finale della somma
console.log('La somma dei 5 numeri inseriti é: ' + somma);
