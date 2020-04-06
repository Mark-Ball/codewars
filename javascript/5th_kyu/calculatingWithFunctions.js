function zero(arg) {
    myNumber = 0;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function one(arg) {
    myNumber = 1;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function two(arg) {
    myNumber = 2;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function three(arg) {
    myNumber = 3;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function four(arg) {
    myNumber = 4;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function five(arg) {    
    myNumber = 5;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function six(arg) {
    myNumber = 6;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function seven(arg) {
    myNumber = 7;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function eight(arg) {
    myNumber = 8;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}
function nine(arg) {
    myNumber = 9;
    if (!arg) {
        return myNumber;
    }

    const [operation, otherNumber] = arg;
    switch (operation) {
        case 'plus':
            return myNumber + otherNumber;
        case 'minus':
            return myNumber - otherNumber; 
        case 'times':
            return myNumber * otherNumber;
        case 'dividedBy':
            return Math.floor(myNumber / otherNumber);
    }
}

function plus(arg) {
    return ['plus', arg]
}
function minus(arg) {
    return ['minus', arg]
}
function times(arg) {
    return ['times', arg]
}
function dividedBy(arg) {
    return ['dividedBy', arg]
}


console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3