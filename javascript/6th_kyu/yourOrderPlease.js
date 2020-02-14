function order(words){
    words = words.split(' ');
    const result = [];
    for (let i = 1; i <= words.length; i++) {
        for (let word of words) {
            if (word.includes(i)) {
                result.push(word);
            };
        };
    };
    return result.join(' ');
};
console.log(order("is2 Thi1s T4est 3a"));
