function incrementString (strng) {
    let numberIndex;
    for (let i = 0; i < strng.length; i++) {
        if (/[0-9]/.test(strng[i])) {
            numberIndex = i;
            break;
        }
    }

    let first = strng.slice(0, numberIndex);
    let second = numberIndex !== undefined ? strng.slice(numberIndex) : null;

    if (!second) {
        return first + '1';
    }

    let numNumbers = second.length;
    second = +second + 1;
    second = second.toString();
    while (second.length < numNumbers) {
        second = '0' + second;
    }
    return first + second;
}

console.log(incrementString('1')); // 2
console.log(incrementString('foo')); // foo1
console.log(incrementString('foobar23')); // foobar24
console.log(incrementString('foo0042')); // foo0043
console.log(incrementString('foo9')); // foo10
console.log(incrementString('foo099')); // foo100