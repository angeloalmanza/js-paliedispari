// PALINDROMA
// Richiesta parola all'utente
const userWord = prompt("Inserisci una parola");
console.log(isPalindrome(userWord));


// PARI E DISPARI
// Scelta tra pari e dispari e inserimento numero
const userChoice = prompt("Scegli: pari o dispari?");
console.log(userChoice);

const userNumber = prompt("Inserisci un numero tra 1 e 5");
console.log(`Il numero dell'utente è ${userNumber}`);
const userNumberInt = parseInt(userNumber);

// Numero randomico per il computer
const cpuNumber = randomNumber(1, 5);
console.log(`Il numero del computer è ${cpuNumber}`);

// Somma tra i due numeri
let somma = userNumberInt + cpuNumber;
console.log(`La somma tra i due numeri è ${somma}`);

// Somma pari o dispari
const messagge = oddEven(somma);
console.log(`La somma è ${messagge}`);

// Stampa messaggio vincitore
if(userChoice === messagge){
    console.log('Ha vinto l\'utente');
}else{
    console.log('Ha vinto il computer');
}