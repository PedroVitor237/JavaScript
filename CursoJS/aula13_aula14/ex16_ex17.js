//Ex16 - AulaE 13
//Estrutura de repetição com teste lógico no início
console.log("ex016 (while):")
let c = 0 //counter
while (c < 5) {
    console.log(`Step ${c + 1}`)
    c++
}

//Estrutura de repetição com teste lógico no final
console.log("ex016 (do while):")
let counter = 0 //counter
do {
    console.log(`Step ${counter + 1}`)
    counter++
} while (counter < 5)

//Ex17 - AulaE 14
console.log("ex017 (for):")
//Estrutura de repetição com variável de controle
for (let i = 0; i < 5; i++) {
    console.log(`Step ${i + 1}`)
}

console.log("END")