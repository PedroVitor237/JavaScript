// Continue corrections from this file      




/* Class 15 - Arrays */
//-------------------//

//Array - A data structure that can store multiple values in a single variable. It is a collection of elements, which can be of any type (numbers, strings, objects, etc.). Arrays are indexed, meaning each element has a specific position in the array, starting from index 0.

let numbers = [5, 8, 7]
console.log(`The array is ${numbers}`)

// Adicionando um valor na posição 3... Tal posição não existia no array antes, então o array é expandido automaticamente
numbers[3] = 6
console.log(`Our array is ${numbers}`)

numbers.push(97) // Adiciona um valor na próxima posição disponível do array
console.log(`Our array is ${numbers}`)

//numbers.length Mostra o tamanho do array
//.length é uma atributo, não um método, então não usa parênteses
console.log(`Our array has ${numbers.length} positions`)

numbers.sort() // Coloca os elementos do array em ordem crescente
console.log(`Our array in ascending order is ${numbers}`)

console.log()
//percurso para exibição dos valores do array
// Método tradicional
for (let i = 0; i < numbers.length; i++) {
    console.log(`The position ${i} has the value ${numbers[i]}`)
}
// Método simplificado (for...in)
for (let i in numbers) {
    console.log(`The position ${i} has the value ${numbers[i]}`)
}
/*  */

console.log()
// Buscando um valor no array
let pos = numbers.indexOf(8) // Retorna a posição do valor 8 no array
if (pos == -1) {
    console.log('The value was not found!')
} else {
    console.log(`The value 8 is in position ${pos}`)
}

pos = numbers.indexOf(3) // Retorna -1, pois o valor 3 não existe no array
if (pos == -1) {
    console.log('The value was not found!')
} else {
    console.log(`The value 3 is in position ${pos}`)
} 

//--------------------------------------//
//Post added exercises from web research//

//Create an array with mixed data types (numbers, strings, booleans) and filter only the strings and numbers into separate arrays with the filter() method.

//The code below uses arrow functions, what is not a very beginner thing and not a very common practice in the course, but it is a good practice to learn and use them in your code. Arrow functions are a more concise way to write functions in JavaScript, and they are often used in functional programming and when working with array methods like filter(), map(), and reduce().

const mixedArray = ["Alice", 42, true, "Bob", 17, false, "Charlie"];

// 1. Filter only strings
const stringsOnly = mixedArray.filter(item => typeof item === "string");
console.log(stringsOnly); // Output: ["Alice", "Bob", "Charlie"]

// 2. Filter only numbers
const numbersOnly = mixedArray.filter(item => typeof item === "number");
console.log(numbersOnly); // Output: [42, 17]
