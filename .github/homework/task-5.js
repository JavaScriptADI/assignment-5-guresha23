function averageStringLength(strings) {
    if (strings.length === 0) return 0;

    let totalLength = 0;
    for (let i = 0; i < strings.length; i++) {
        totalLength += strings[i].length;
    }

    return totalLength / strings.length;
}


const stringsArray = ["apple", "banana", "orange"];
console.log(averageStringLength(stringsArray)); 
