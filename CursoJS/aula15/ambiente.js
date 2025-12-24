/* Aula 15 - Arrays */
//Array/Vetor/Variável composta - Estrutura de dados que permite armazenar múltiplos valores em uma única variável
let num = [5, 8, 7]
console.log(`Nosso vetor é o ${num}`)

// Adicionando um valor na posição 3... Tal posição não existia no array antes, então o array é expandido automaticamente
num[3] = 6
console.log(`Nosso vetor é o ${num}`)

num.push(97) // Adiciona um valor na próxima posição disponível do array
console.log(`Nosso vetor é o ${num}`)

//num.length Mostra o tamanho do array
//.length é uma atributo, não um método, então não usa parênteses
console.log(`Nosso vetor tem ${num.length} posições`)

num.sort() // Coloca os elementos do array em ordem crescente
console.log(`Nosso vetor em ordem crescente é o ${num}`)

console.log()
//percurso para exibição dos valores do array
// Método tradicional
for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
// Método simplificado (for...in)
for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
/*  */

console.log()
// Buscando um valor no array
let pos = num.indexOf(8) // Retorna a posição do valor 8 no array
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

pos = num.indexOf(3) // Retorna -1, pois o valor 3 não existe no array
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 3 está na posição ${pos}`)
} 

