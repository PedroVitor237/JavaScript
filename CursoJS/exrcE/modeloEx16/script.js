/* /*contador, Inicio, fim, salto, verificação de campos, emoji *//*
function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let salto = document.getElementById('txtsalto')
    let res = document.getElementById('resultado')
    
    //validação dos dados
    if (ini.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(salto.value)

        //validação da contagem crescente e decrescente
        if (!(i < f && s > 0) && !(i > f && s < 0) && s !=0) {
            res.innerHTML = '<p><em>Impossível contar! Se a contagem for crescente, o salto deve ser <strong>positivo</strong>. Se a contagem for decrescente, o salto deve ser <strong>negativo</strong>.</em></p>'
        } else {
            if (i < f) {
                //contagem crescente
                res.innerHTML = 'Contagem crescente: <br>'
                for (let c = i; c <= f; c += s) {
                    res.innerHTML += ` ${c} \u{1F449}` //emoji de mão apontando para a direita
                }
            } else {
                //contagem decrescente
                res.innerHTML = 'Contagem decrescente: <br>'
                for (let c = i; c >= f; c += s) {
                    res.innerHTML += ` ${c} \u{1F449}` //emoji de mão apontando para a direita
                }
            }
            res.innerHTML += `\u{1F3C1}` //emoji de bandeira quadriculada
        }

    }
}
 */
//i = 0, f = 10, s = 2: valido
    //i < f & s > 0//contagem crescente

//i = 10, f = 0, s = -2: valido
    //i > f & s < 0//contagem decrescente

//i = 0, f = 10, s = -2: invalido
//i = 10, f = 0, s = 2: invalido
    //i > f & s > 0//contagem decrescente

/* 
Versão Guanabara

*/
/*contador, Inicio, fim, salto, verificação de campos, emoji */
function contar() {
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let salto = document.getElementById('txtsalto')
    let res = document.getElementById('resultado')
    
    //validação dos dados
    if (ini.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let s = Number(salto.value)
        if (s <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            s = 1
        }

        //contagem crescente
        if (i < f) {     
            res.innerHTML = 'Contagem crescente: <br>'
            for (let c = i; c <= f; c += s) {
                res.innerHTML += ` ${c} \u{2192}` //emoji de seta apontando para a direita //esse formato funciona apenas em template string (entre crases)
            }
            res.innerHTML += `\u{1F3C1}` //emoji de bandeira quadriculada
        } else {
            //contagem decrescente
            res.innerHTML = 'Contagem decrescente: <br>'
            for (let c = i; c >= f; c -= s) {
                res.innerHTML += ` ${c} \u{2192}` //emoji de seta apontando para a direita
            }
        }
        res.innerHTML += `\u{1F3C1}` //emoji de bandeira quadriculada
        
    }
}
