function countUpperCaseStrings(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' && array[i].toUpperCase() === array[i]) {
            count++;
        }
    }
    return count;
}

const someArray = ["String", "string", "StRing"];
console.log(countUpperCaseStrings(someArray)); 
