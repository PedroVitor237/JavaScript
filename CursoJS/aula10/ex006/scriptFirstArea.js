//Functions for the first area, with events added in the HTML code.//

function clickFirst() {
    let area = window.document.getElementById('firstArea')
    area.innerText = 'Clicked!'
    area.style.background = 'blue'
}

function enterFirst() {
    let area = window.document.getElementById('firstArea')
    area.innerText = 'Mouse entered!'
}

function leaveOutFirst() {
    let area = window.document.getElementById('firstArea')
    area.innerText = 'Mouse left!'
    area.style.background = /*'orange'*/'rgb(226, 139, 24)'
}