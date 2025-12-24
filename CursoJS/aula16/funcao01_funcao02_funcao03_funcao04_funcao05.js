/* Aula 16 - Funções */
//Função 01 - Par ou Ímpar
console.log('--- Função Par ou Ímpar ---')
function parImpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let r = parImpar(23)
console.log(r)

// Mesma função, porém utilizando operador ternário
function parImpar2(n) {
    return n % 2 == 0 ? 'Par' : 'Ímpar'
}

let r2 = parImpar2(10)
console.log(r2)

// Chamando a função diretamente no console.log
console.log(parImpar2(7))

//Função 02 - Soma
console.log('--- Função Soma ---')
function soma(a = 0, b = 0) { // parâmetros com valores padrão 0 caso nenhum valor seja passado //Evitar erros de NaN
    return a + b
}


console.log(soma(2, 5))
console.log(soma(8)) // o segundo parâmetro assume o valor padrão 0
console.log(soma())  // ambos os parâmetros assumem o valor padrão 0 

//Função 03 - Dobro de um número
console.log('--- Função Dobro ---')
//função atribuída a uma variável
let v = function (x) {
    return x * 2
}
console.log(v(5))

//Mesma função utilizando arrow function
const dobro = x => x * 2 //Parâmetro único dispensa os parênteses
console.log(dobro(6))

//Função 04 - Fatorial
console.log('--- Função Fatorial ---')
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}   

console.log(fatorial(5))

//Função 05 - Fatorial com função recursiva
console.log('--- Função Fatorial Recursiva ---')
//função recursiva é aquela que chama a si mesma
function fatorialRec(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * fatorialRec(n - 1)
    }
}

console.log(fatorialRec(5))



















//Linhas de código sugeridas para prática adicional pelo Copilot:
/* 
// Função com retorno imediato (arrow function)
const subtrair = (a = 0, b = 0) => a - b

console.log(subtrair(10, 4))
console.log(subtrair(7))
console.log(subtrair())

// Função com mais de uma linha (arrow function)
const dividir = (a = 1, b = 1) => {
    let resultado = a / b
    return resultado
}

console.log(dividir(20, 4))
console.log(dividir(9))
console.log(dividir())

// Função anônima autoexecutável
console.log('--- Função Anônima Autoexecutável ---')
(function () {
    console.log('Esta função foi executada automaticamente!')
})()

// Função anônima autoexecutável com parâmetros
(function (nome) {
    console.log(`Olá, ${nome}! Esta função foi executada automaticamente!`)
})('Maria')     

// Função recursiva
console.log('--- Função Recursiva ---')
function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5)) // 120
console.log(fatorial(0)) // 1
console.log(fatorial(1)) // 1
console.log(fatorial(7)) // 5040   
console.log(fatorial(10)) // 3628800
// Fatorial de números negativos não está definido  
//console.log(fatorial(-3)) // Isso causaria uma chamada infinita e um estouro de pilha

// Função com callback
console.log('--- Função com Callback ---')
function executarOperacao(a, b, operacao) {
    return operacao(a, b)
}

function adicionar(x, y) {
    return x + y
}

function multiplicar(x, y) {
    return x * y
}

console.log(executarOperacao(5, 3, adicionar)) // 8
console.log(executarOperacao(5, 3, multiplicar)) // 15
console.log(executarOperacao(10, 4, (x, y) => x - y)) // 6 (subtração usando uma função anônima como callback)      

// Função com escopo de variável
console.log('--- Função com Escopo de Variável ---')
let mensagem = 'Olá, Mundo!' // Variável global

function mostrarMensagem() {
    let mensagem = 'Olá, Universo!' // Variável local
    console.log(mensagem) // Acessa a variável local
}

mostrarMensagem() // Exibe 'Olá, Universo!'
console.log(mensagem) // Exibe 'Olá, Mundo!' (variável global)  

// Função com parâmetro rest
console.log('--- Função com Parâmetro Rest ---')
function somarTudo(...numeros) {
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
}

console.log(somarTudo(1, 2, 3)) // 6
console.log(somarTudo(5, 10, 15, 20)) // 50
console.log(somarTudo()) // 0 (nenhum número passado)   
 */