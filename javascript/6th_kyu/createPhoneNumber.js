function createPhoneNumber(numbers){
    const strNumbers = numbers.join('');
    return `(${strNumbers[0] + strNumbers[1] + strNumbers[2]}) ${strNumbers[3] + strNumbers[4] + strNumbers[5]}-${strNumbers[6] + strNumbers[7] + strNumbers[8] + strNumbers[9]} `;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))