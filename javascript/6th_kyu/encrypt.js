function encrypt(text, n) {
    if (n < 1 || text === null || text === '') {
        return text;
    }

    let firstWord = '', secondWord = '';
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 1) { // odds
            firstWord += text[i];
        } else { // evens
            secondWord += text[i];
        }
    }
    if (n === 1) {
        return firstWord + secondWord;
    } else {
        return encrypt(firstWord + secondWord, n - 1);
    }
}

console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!"
console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!"

function decrypt(encryptedText, n) {
    if (n < 1 || encryptedText === null || encryptedText === '') {
        return encryptedText;
    } 

    const midpoint = Math.floor(encryptedText.length / 2);
    const firstWord = encryptedText.slice(0, midpoint);
    const secondWord = encryptedText.slice(midpoint);
    let combinedWord = '';
    for (let i = 0; i < Math.max(firstWord.length, secondWord.length); i++) {
        if (secondWord[i]) {
            combinedWord += secondWord[i];
        }
        if (firstWord[i]) {
            combinedWord += firstWord[i];
        }
    }

    if (n === 1) {
        return combinedWord;
    } else {
        return decrypt(combinedWord, n - 1);
    }
}

console.log(decrypt("This is a test!", 0)); // "This is a test!"
console.log(decrypt("hsi  etTi sats!", 1)); // "This is a test!"
console.log(decrypt("s eT ashi tist!", 2)); // "This is a test!"

