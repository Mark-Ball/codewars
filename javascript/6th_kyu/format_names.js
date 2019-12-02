function list(names) {
    let numNames = names.length;
    if (numNames === 0) {
        return "";
    }
    
    if (numNames === 1) {
        return names[0].name;
    }

    if (numNames === 2) {
        return `${names[0].name} & ${names[1].name}`;
    }

    if (numNames > 2) {
        let result = "";
        for (let i = 0; i < numNames - 2; i++) {
            result += `${names[i].name}, `;
        }

        result += `${names[numNames - 2].name} & ${names[numNames - 1].name}`;
        return result
    }
}

console.log(list([{name: 'Jimmy'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));