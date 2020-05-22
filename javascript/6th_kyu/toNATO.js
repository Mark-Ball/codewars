function toNATO(str) {
    str = str.split(' ').join('');
    let result = [];
    for (let letter of str) {
        if (/\w/.test(letter)) {
            result.push(alphabet[letter.toLowerCase()]);
        } else {
            result.push(letter);
        }
    }
    return result.join(' ');
}

const alphabet = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
}

console.log(toNATO('If you can read')); // India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta
console.log(toNATO('go for it!')); // Golf Oscar Foxtrot Oscar Romeo India Tango !