// JSnack 3
// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var limiteMax = parseInt(prompt("Inserire il numero limite di cui stampare il cubo"));

while(isNaN(limiteMax)) {
    limiteMax = parseInt(prompt("Il dato inserito non é valido. Inserire nuovamente il numero " + (i + 1)));
}

for (var i = 0; i < limiteMax; i++) {
    var cubo = Math.pow(i + 1, 3);
    console.log('Il cubo di ' + (i + 1) + ' é: ' + cubo);
}
