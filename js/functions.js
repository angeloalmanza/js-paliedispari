// PALINDROMA
/**
 * funzione che verifica se una parola è palindroma
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome (word){
    let messagge = '';
    for(let i = 0; i < word.length / 2; i++){
        const curLetter = word[i];
        if(curLetter !== word[word.length - i - 1]){
            return messagge = `La parola ${word} non è palindroma`;
        }
    }
    return messagge = `La parola ${word} è palindroma`;
}


// PARI E DISPARI
/**
 * funzione che genera un numero casuale
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * funzione che verifica se un numero è pari o dispari
 * @param {number} totale
 * @returns {string}
 */
function oddEven(totale){
    let result = '';
    if(totale % 2 === 0){
        result = 'pari';
    }else{
        result = 'dispari';
    }
    return result;
}