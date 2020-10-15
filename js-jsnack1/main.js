//  L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var numero1 = parseInt(prompt('Inserisci il primo numero'));
var numero2 = parseInt(prompt('Inserisci il secondo numero'));

if (!isNaN(numero1) && !isNaN(numero2)) {
    if(numero1 > numero2) {
        console.log('Il primo numero inserito é il piú grande');
    } else if(numero1 < numero2) {
        console.log('Il secondo numero inserito é il piú grande');
    } else {
        console.log('I numeri inseriti sono uguali');
    }
} else {
    alert("uno, o piú, dati inseriti non sono numeri, ricaricare la pagina per riprovare");
}
