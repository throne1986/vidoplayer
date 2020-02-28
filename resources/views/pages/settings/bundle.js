import html from './player/index.html';
require('./player/css/main.css');
require('./player/css/player.css');
require('./player/css/style.css');
require( './player/js/main.js');
require('./player/js/player.js');
require( './player/js/ads.js');
import { initDesktopAutoplayExample }from  './player/js/ads.js';

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

    const loadScript = function() {
        return new Promise(function(resolve, reject) {
            var script = document.createElement('script');
            script.src="https://imasdk.googleapis.com/js/sdkloader/ima3.js";
            script.async = true;
            document.body.appendChild(script);

            script.addEventListener('load', function() {
                resolve(script)
              })

              script.addEventListener('error', function (error) {
                reject(error)
              })
        })
    }
 window.onload  = function(){ // wywoluje sobie tego reklama
    loadScript().then(function() {
        const result = initDesktopAutoplayExample();
        console.log(result);
    }).catch(function(error) {
        console.error(error);
    })

    
 }


}



// document.addEventListener('readystatechange', event => {
//     if (event.target.readyState === "complete") {
//         var application = null;
//         window.onload = function() {
//         application = new Application();
//         console.log(application);
//         document.getElementById('pause-play-button').click()
//         };
//     }

//     });
