let strings = ["apple", "banana", "pear", "grape", "kiwi"];

let shortestString = strings[0];
let shortestLength = strings[0].length;
let shortestIndex = 0;

for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < shortestLength) {
        shortestString = strings[i];
        shortestLength = strings[i].length;
        shortestIndex = i;
    }
}


console.log(shortestString);
console.log(shortestLength);
console.log(shortestIndex);