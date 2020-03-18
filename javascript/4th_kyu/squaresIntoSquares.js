// input is n
// output is an array of increasing numbers where the sum of squares = n squared
// if multiple sequences meet the condition, the solution is the sequence with the highest individual number
// if there is no solution, return null

function decompose(n) {
    const target = n ** 2;
    const result = [];

    // initial conditions
    let attempt = n;
    let distanceToTarget = target;

    while (distanceToTarget > 0) {
        attempt -= 1;
        // console.log('Attempt: ' + attempt);
        // console.log('Distance: ' + distanceToTarget);
        if (attempt ** 2 <= distanceToTarget) {
            // console.log('Attempt pushed');
            distanceToTarget -= attempt ** 2;
            result.unshift(attempt);
            const sumOfSquares = result.reduce((total, currentValue) => (total + currentValue ** 2), 0);
            if (target === sumOfSquares) return result;
        }
    }
}

console.log(decompose(7));