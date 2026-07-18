// Continue corrections from this file      




/* Class 15 - Arrays */
//-------------------//

//Array - A data structure that can store multiple values in a single variable. It is a collection of elements, which can be of any type (numbers, strings, objects, etc.). Arrays are indexed, meaning each element has a specific position in the array, starting from index 0.

let numbers = [5, 8, 7]
console.log(`The array is ${numbers}`)

// Adding a value to position 3... That position didn't exist in the array before, so the array is expanded automatically
numbers[3] = 6
console.log(`Now the array is ${numbers}`)

//push() method adds a value to the next available position in the array
numbers.push(97)
console.log(`Now the array is ${numbers}`)

//numbers.length Shows the size of the array
//.length is an attribute, not a method, so it doesn't use parentheses
console.log(`The array has ${numbers.length} positions`)

//sort() method places the elements of the array in ascending order
numbers.sort()
console.log(`The array in ascending order is ${numbers}`)

console.log("----------------------------------------------")
//Iterating over the array with a for loop
//Traditional for loop
for (let i = 0; i < numbers.length; i++) {
    console.log(`The position ${i} has the value ${numbers[i]}`)
}
//for...in loop iterates over the indices of the array, it's a more modern and cleaner way to iterate over arrays in JavaScript
for (let i in numbers) {
    console.log(`The position ${i} has the value ${numbers[i]}`)
}
/*  */

console.log("----------------------------------------------")
//Searching for a value in the array with indexOf() method
//indexOf() method returns the index of the first occurrence of a specified value in the array, or -1 if the value is not found. It is useful for searching for a specific value in an array and determining its position.
let searchValue = 8
let position = numbers.indexOf(searchValue) // Returns the position of the value 8 in the array
if (position == -1) {
    console.log('The value was not found!')
} else {
    console.log(`The value ${searchValue} is in position ${position}`)
}

//--------------------------------------//

let searchValue2 = 3
let position2 = numbers.indexOf(searchValue2) // Returns -1, as the value 3 does not exist in the array
if (position2 == -1) {
    console.log('The value was not found!')
} else {
    console.log(`The value ${searchValue2} is in position ${position2}`)
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
