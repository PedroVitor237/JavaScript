//Adicionar números de 1 a 100 a um array; mostrar os números adicionados atraves de select em HTML; botão de "finalizar" retornando a quantidade de números, o maior valor informado, o menor valor informado, a soma dos valores e a média dos valores.

let num = document.getElementById('txtnumber')
let numList = document.getElementById('numList')
let valores = []
let res = document.getElementById('res')

function isValidNumero(n) {
    if (Number(n) > 0 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

function inLista(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true //n está na lista
    } else {
        return false //n não está na lista
        
    }
}

function adicionar() {
    if (!isValidNumero(num.value) || inLista(num.value, valores)) {
        window.alert('[ERRO] Por favor, digite um número entre 1 e 100 que não esteja na lista!')
    } else {
        valores.push(Number(num.value)) // registra o número no array para evitar repetições futuras
        let itemOption = document.createElement('option')
        itemOption.text = `Número ${num.value} adicionado.`
        itemOption.value = `num${num.value}`
        numList.appendChild(itemOption)
        res.innerHTML = ''
    }
// limpa o campo de entrada e posiciona o cursor nele novamente
    num.value = ''
    num.focus()

}

function analisar() {
    if (valores.length == 0) {
        window.alert('[ERRO] Adicione números antes de analisar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let i in valores) {
            if (valores[i] > maior) {
                maior = valores[i]
            }
            if (valores[i] < menor) {
                menor = valores[i]
            }
            soma += valores[i]
        }

        let media = soma / total

        //Exibição dos resultados
        res.innerHTML = ''
        res.innerHTML += `<p>Quantidade de números cadastrados ${total}.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }   
        

} 



/*     if (num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) { */

/* let maior = Math.max(...valores)
let menor = Math.min(...valores)
let soma = valores.reduce((a, b) => a + b, 0) */