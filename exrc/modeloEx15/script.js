function verificar() {
    let data = new Date()
    let ano = data.getFullYear() //full year pega o ano completo com 4 digitos
    let fAno = document.getElementById('txtano') //pega o valor do input //f = formulário
    let res = document.getElementById('res')
    
    //validação dos dados
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let gênero = ''
        let img = document.createElement('img') //cria um elemento img dinamicamente
        img.setAttribute('id', 'imagem') //adiciona um id ao elemento img criado

        //verifica o gênero e a idade para selecionar a imagem adequada
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'criancM.WebP')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemM.WebP')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adultoM.WebP')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.WebP')
            }

        } else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'criancF.WebP')
            } else if (idade < 25) {
                //jovem
                img.setAttribute('src', 'jovemF.WebP')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'adultoF.WebP')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.WebP')
            }
        }
        //exibe resultados (texto e imagem)
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(document.createElement('br')) //adiciona uma quebra de linha antes da imagem para melhor visualização
        res.appendChild(img) //adiciona a imagem criada dentro da div res
    }
}
