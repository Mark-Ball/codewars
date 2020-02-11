function findOutlier(integers){
    // check first 3 numbers to determine whether the outlier is even or odd
    let evens = [];
    let odds = [];
    for (let i = 0; i < 3; i++) {
        integers[i] % 2 === 0 ? evens.push(integers[i]) : odds.push(integers[i]);  
    }

    if (evens.length > odds.length) {
        return integers.filter(value => {
            return value % 2 !== 0
        })[0]; 
    } else {
        return integers.filter(value => {
            return value % 2 === 0
        })[0]; 
    }
}

console.log(findOutlier([1,1,0,1,1]));