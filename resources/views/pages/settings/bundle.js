import html from './player/index.html';
import './player/css/main.css';
import './player/css/player.css';
import './player/css/style.css';
import './player/js/application.js';
import './player/js/videoplayer.js';
import './player/js/main.js';

let container;
let elements = [];
export function show(text) {

    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    temporary.getElementsByClassName('js-widget-dialog').textContent = text;
    console.log("test" + temporary);

   
    // append elements to body
    container = document.getElementById('adform-outstream');
    // var closeContainer =document.getElementById('skip');
    console.log(container);
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        container.appendChild(temporary.children[0]);
    }

    // closeContainer.addEventListener('click', close);
}

// export function close() {
//     console.log('element clicked')
//     while (elements.length > 0) {
//         elements.pop().remove();
//     }
//     container.removeEventListener('click', close);
// }