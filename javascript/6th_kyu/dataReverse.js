function dataReverse(data) {
    // use slice method to get sequences of 8 bits
    const result = [];
    for (let i = 0; i < data.length; i += 8) {
        result.unshift(...data.slice(i, i + 8));
    }
    return result;
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0])); 
// [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]