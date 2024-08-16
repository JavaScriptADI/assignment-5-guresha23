let names = []

for (let i = 0; i < 10; i++) {
   let name = prompt("What is your name?");
   if (!name || name.toLowerCase() === "Cancel") {
      break;
   }

names.push(name);

}

console.log(names)
