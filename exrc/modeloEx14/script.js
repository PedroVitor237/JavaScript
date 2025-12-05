function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hrr = data.getHours()
    msg.innerHTML = `Agora são ${hrr} horas`
    if (hrr > 5.30 && hrr < 12) {
        img.src = "leonardoPaisagemManh0.WebP"
        document.body.style.background = '#4fbfde'
    } else if (hrr > 11.59 && hrr < 18.30) {
        img.src = "leonardoPaisagemTarde2.WebP"
        document.body.style.background = '#ffbf6b'
    }  else {
        img.src = "leonardoPaisagemNoite3.WebP"
        document.body.style.background = '#162d55'
    }
}
