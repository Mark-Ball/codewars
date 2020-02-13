function iqTest(numbers){
    const arrNumbers = numbers.split(' ');
    const evens = arrNumbers.filter(num => {
        return num % 2 === 0;
    });
    const odds = arrNumbers.filter(num => {
        return num % 2 === 1;
    });
    const num = evens.length > odds.length ? odds[0] : evens[0];

    return arrNumbers.indexOf(num) + 1;
};
console.log(iqTest("2 4 7 8 10"));