function titleCase(title, minorWords) {
    let str = title.split(" ");
    let exceptions = minorWords.split(" ");

    let output = '';
    for (word of str) {
        let firstLetter = word[0].toUpperCase();
        let remainderOfWord = word.substr(1);
        console.log(firstLetter + remainderOfWord);
    }
}
titleCase('a clash of KINGS', 'a an the of');