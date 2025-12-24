//ex011
//Condições Aninhadas
console.log("ex011:")

let idade = 20
console.log(`${idade}`)
if (idade < 16) {
    console.log("Não vota")
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatório")
}

//ex012
//Condições Aninhadas
console.log("ex012:")

let agr = new Date() 
let hora = agr.getHours()
let minut = agr.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minut} minutos`)
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite")
}

//ex013
//Condições Múltiplas (Switch case)
console.log("ex013:")
let dSeman = agr.getDay()
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