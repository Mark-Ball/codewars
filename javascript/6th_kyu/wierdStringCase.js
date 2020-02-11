function toWeirdCase(string){
    const arr = string.split(' ');
    let result = [];
    for (word of arr) {
        for (let i = 0; i < word.length; i++) {
            i % 2 === 0 ? result.push(word[i].toUpperCase()) : result.push(word[i]);
        }
        result.push(' ');
    }
    result.pop();
    return result.join('');
};

console.log(toWeirdCase('This is a test'));