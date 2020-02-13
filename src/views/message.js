
import html from './message.html';
import './message.css';

let elements = [];
let container;
let codeid = "4e7c03b07d8b3d477d44";
export function show(text) {

    // convert plain HTML string into DOM elements
    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    temporary.getElementsByClassName('js-widget-dialog')[0].textContent = text;
    console.log("test" + temporary);

    // append elements to container
    container = document.getElementById('adform-outstream');
    console.log("I am elements motherfucker" + elements[0]);
    console.log("Inserted container" + container);
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        container.appendChild(temporary.children[0]);
    }

    container.addEventListener('click', close);
}

export function close() {
    while (elements.length > 0) {
        elements.pop().remove();
    }
    container.removeEventListener('click', close);
}