function gerarTabuada() {
    let num = document.getElementById('txtnumber')
    let res = document.getElementById('res')
    let selTab = document.getElementById('seltab')

    //validação do campo
    if (num.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        let n = Number(num.value) //conversão para número
        res.innerHTML = `Tabuada de ${n}: <br>`
        selTab.innerHTML = '' //limpar o resultado anterior

        for (let c = 0; c <= 10; c++) {
            let option = document.createElement('option')
            option.text = `${n} x ${c} = ${n * c}`
            option.value = `tab${c}`
            selTab.appendChild(option)
        }
    }
}

/* 
for (let c = 0; c <= 10; c++) {
    let resultado = n * c
    res.innerHTML += `${n} x ${c} = ${resultado} <br>`
    } 
*/