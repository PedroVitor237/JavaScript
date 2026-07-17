//Ex16 - ClassE 13
//While loop
//Loop with logical test at the beginning
console.log("ex016 (while):")

let counter = 0
while (counter < 5) {
    console.log(`Step ${counter + 1}`)
    counter++
}

console.log("----------------------------------------------")

//Estrutura de repetição com teste lógico no final
//Do while loop
//Loop with logical test at the end, //it will always execute at least once
console.log("ex016 (do while):")

counter = 0 //reset counter to 0 to reuse it in the next example loop
do {
    console.log(`Step ${counter + 1}`)
    counter++
} while (counter < 5)

console.log("----------------------------------------------")

//Ex17 - ClassE 14
//For loop
//Loop with logical test at the beginning and a variable of control initialization in the same line 
console.log("ex017 (for):")

for (let i = 0; i < 5; i++) {
    console.log(`Step ${i + 1}`)
}

console.log("----------------------------------------------")
