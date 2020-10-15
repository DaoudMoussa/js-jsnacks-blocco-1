// JSnack 2: L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

/*    NO FOR     */
// var parola1 = prompt("Inserire la prima parola");
// var parola2 = prompt('Inserire la seconda parola');
//
// if(parola1.length <= parola2.length) {
//     console.log(parola1);
//     console.log(parola2);
// } else {
//     console.log(parola2);
//     console.log(parola1);
// }


/*    USANDO FOR    */
var parole = [];

for (var i = 0; i < 2; i++) {
    parole.push(prompt("Inserire la prima parola"));
}

if(parole[0].length <= parole[1].length) {
    console.log(parole[0]);
    console.log(parole[1]);
} else {
    console.log(parole[1]);
    console.log(parole[0]);
}
