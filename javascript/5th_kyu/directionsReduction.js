function dirReduc(arr){
    for (let i = 0; i < arr.length; i++) {
        if (opposites(arr[i], arr[i + 1])) {
            arr.splice(i, 2);
            i -= 2;
        }
    }
    return arr;
}

function opposites(dir1, dir2) {
    if (
        dir1 === 'NORTH' && dir2 === 'SOUTH' ||
        dir1 === 'SOUTH' && dir2 === 'NORTH' ||
        dir1 === 'EAST' && dir2 === 'WEST' ||
        dir1 === 'WEST' && dir2 === 'EAST'
    ) {
        return true;
    }
    return false;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []