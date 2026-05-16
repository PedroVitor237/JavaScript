//The following code is an example of how to add events using JavaScript, without the need to add them in the HTML code, as in the first example.//

let secondArea = window.document.getElementById('secondArea') //This variable is in global scope, which can cause problems with other functions that also need to access the same element.//

secondArea.addEventListener('click', click)
secondArea.addEventListener('mouseenter', enter)
secondArea.addEventListener('mouseout', leaveOut)


//The following functions are the same as the ones used in the first example, but with the addition of a local variable "area" that is assigned the value of "secondArea", which is the element that we want to manipulate. This way, we avoid the problem of having a global variable that can be accessed by all functions, which is not considered a good practice.//
function click() {
    let area = secondArea
    area.innerText = 'Clicked!'
    area.style.background = 'blue'
}

function enter() {
    let area = secondArea
    area.innerText = 'Mouse entered!'
}

function leaveOut() {
    let area = secondArea
    area.innerText = 'Mouse left!'
    area.style.background = /*'orange'*/'rgb(226, 139, 24)'
}