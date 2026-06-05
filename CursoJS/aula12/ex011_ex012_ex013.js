// Continue corrections from this file      

//ex011
//Nested Conditions
console.log("ex011:")
console.log("Legal voting age criteria:")

let age = 20
console.log(`${age}`)

if (age < 16) {
    console.log("Dont vote")
} else if (age < 18 || age > 65) {
    console.log("Optional vote")
} else {
    console.log("Mandatory vote")
}

//ex012
//Nested Conditions
console.log("ex012:")

let now = new Date() 
let hour = now.getHours()
let minute = now.getMinutes()
console.log(`It is ${hour} hours and ${minute} minutes`)

if (hour < 5) {
    console.log("Good midnight!")
    console.log("It's a proper time to sleep!")
} else if (hour < 12) {
    console.log("Good morning!")
} else if (hour < 18) {
    console.log("Good afternoon!")
} else if (hour < 23) {
    console.log("Good evening!")
} else {
    console.log("Good night!")
}

//ex013
//Condições Múltiplas (Switch case)
console.log("ex013:")
let dSeman = now.getDay()
console.log(dSeman)

switch (dSeman) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
        break      
}