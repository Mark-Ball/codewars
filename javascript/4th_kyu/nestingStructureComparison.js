Array.prototype.sameStructureAs = function (other) {
    let thisString = JSON.stringify(this);
    let otherString = JSON.stringify(other);

    thisString = thisString.replace(/\d/g, '');
    thisString = thisString.replace(/(?<=")(\[|\])(?=")/g, ''); //replace left or right brackets inside quotes
    thisString = thisString.replace(/"/g, ''); //replace quotes

    otherString = otherString.replace(/\d/g, '');
    otherString = otherString.replace(/(?<=")(\[|\])(?=")/g, ''); //replace left or right brackets inside quotes
    otherString = otherString.replace(/"/g, ''); //replace quotes

    console.log(thisString);
    console.log(otherString);
    console.log(thisString === otherString);
    return thisString === otherString;
};

// JSON.stringify the arrays
// remove any non-bracket characters
// compare the strings

// bug fix to finish last test
//  if a bracket is inside "", replace with empty string

// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );    
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
[1,'[',']'].sameStructureAs(['[',']',1]);