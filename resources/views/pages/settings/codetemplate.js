import html from './player/index.html';
import './player/css/main.css';
import './player/css/player.css';
import './player/css/style.css';
import './player/js/application.js';
import './player/js/main.js';
import './player/js/videoplayer.js';
import './player/js/player.js';

export function show(text) {

    let temporary = document.createElement('div');
    temporary.innerHTML = html;
    temporary.getElementsByClassName('js-widget-dialog')[0].textContent = text;
    console.log("test" + temporary);

    // append elements to body
    body = document.getElementsByTagName('body')[0];
    while (temporary.children.length > 0) {
        elements.push(temporary.children[0]);
        body.appendChild(temporary.children[0]);
    }

    body.addEventListener('click', close);
}

export function close() {
    while (elements.length > 0) {
        elements.pop().remove();
    }
    body.removeEventListener('click', close);
}