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