// JSnack 7
// Calcola la somma e la media dei numeri da 1 a 10.

//dichiarazione variabile che andrá a contenere la somma finale
var somma = 0;

for (var i = 0; i < 10; i++) {
    somma = somma + i + 1;
}

var media = somma / 10;

console.log("La somma dei numeri da 1 a 10 é: " + somma);
console.log("La media dei numeri da 1 a 10 é: " + media);
